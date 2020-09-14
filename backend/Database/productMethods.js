const { Product } = require("./model");
const { sequelize } = require("./dbConnection");



const createdProduct = async (product) => {
    const result = await Product.create({

        name: user.name,
        lastName: user.lastName,
        password: user.password,
        email: user.email
    
        });
    return result.toJSON();
    
}

const updatedProduct = async (product) => {
    try {
        const result = await Product.update(
            {
                name: user.name,
                lastName: user.lastName,
                password: user.password,
                email: user.email
            },
            {where: {id: user.id}}
        )

        return {
            result: result.dataValues,
            code: "200"
        }
    } catch (err) {

        console.log(err);
        return "500";
    }
}

const getProductById = async (product) => {
    const option = await Product.findOne({ where: {id: product.id}});
    return option;
}

const getAllProduct = async () => {
   
   return await Product.findAll({ plain: true });
}




module.exports = {
    createdUser,
    updatedUser,
    getUserById,
    getAllUsers
}