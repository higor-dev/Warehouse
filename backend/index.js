require('dotenv/config');
const express = require('express');
const app = express();
const port = process.env.PORT;
const router = require('./Controller/userController');
const product = require('./Controller/productController');
const { General } = require('./Controller/GeneralTransactionController');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { User, Installment, Transaction } = require('./Database/model');
const { getBalance } = require("./Controller/GeneralTransactionController");
const bcrypt = require('bcrypt');
const { db_connection } = require('./Database/index');
var cors = require('cors');
const cron = require('node-cron');
const moment = require('moment');
const { sequelize } = require('./Database/dbConnection');

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(router);
app.use(product);
app.use(General);


// A cada minuto
cron.schedule("30 7 * * *", async function () {
   moment().format('MMMM Do YYYY, h:mm:ss a');
  var date = Date.now();
  var endDateMoment = moment(date);
  console.log( `Cron de pagamento rodando em ${endDateMoment}`);
  const installments = await sequelize.query("select * from storage.installments i where i.paid = false");
  installments[0].map((value,index) => {
    if(endDateMoment.month() + 1 == value.paymentDay.getMonth() + 1 && value.paid === 0){
      payInstallments(value, endDateMoment);
    }
  })
})
  async function payInstallments(value, endDateMoment){
    var transaction = await sequelize.query(`select * from storage.transactions i where i.id = ${value.transactionId}`);    

    const valor = value.price + transaction[0][0].received;
    
    transaction[0][0].received = valor;

    const optional = await getBalance(1);
    const balance = optional[0][0].balance + valor;
    const users = await sequelize.query(
      `UPDATE storage.companies SET balance = ${balance} WHERE id = 1`,
    );

    value.paid = 1;
    const resultInstallment = await Installment.update(value, {
      where: { id: value.id} 
    })
    const resultTransaction = await Transaction.update(transaction[0][0], {where: {id:transaction[0][0].id}});

    console.log(`A parcela com id = ${value.id} foi paga em ${endDateMoment}, o valor foi somado na transaction com id = ${transaction[0][0].id} e o balance agora é: ${balance}`);

  }


app.post('/login', async (req, res) => {
  const option = await User.findOne({ where: { email: req.body.email } });

  bcrypt.compare(req.body.password, option.password, function (err, result) {
    if (err) return res.json({ message: 'Login inválido' });

    if (result == true) {
      const id = option.id;
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 30000,
      });

      return res.json({ auth: true, token: token });
    }

    return res.json({ message: 'deu merda' });
  });
});

app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
