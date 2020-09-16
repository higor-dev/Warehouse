const { User } = require("./model");
const { sequelize } = require("./dbConnection");


const getUserById = async (user) => {
    const option = await User.findOne({ where: {id: user.id}});
    return option;
}

const getAllUsers = async () => {
   
   return await User.findAll();
}

const createdUser = async (user) => {
    const result = await User.create(user);
    return result.toJSON();
    
}

const updatedUser = async (user) => {
    try {
        const result = await User.update(
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

        return "500";
    }
}


const deleteUser = async (user) => {    
    return await User.destroy({
        where: {
          id: user.id
        }
      });
}




module.exports = {
    createdUser,
    updatedUser,
    getUserById,
    getAllUsers,
    deleteUser
}