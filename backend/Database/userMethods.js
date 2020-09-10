const { User } = require("./model");
const { sequelize } = require("./dbConnection");



const createdUser = async (user) => {
    const result = await User.create({
        name: user.name,
        favoriteColor: user.favoriteColor,
        age: user.age,
        cash: user.cash
        });
    return result.toJSON();
    
}

const updatedUser = async (user) => {
    try {
        const result = await User.update(
            {
                name: user.name,
                favoriteColor: user.favoriteColor,
                age: user.age,
                cash: user.cash
            },
            {where: {id: user.id}}
        )

        return {
            result: result,
            code: "200"
        }
    } catch (err) {

        console.log(err);
        return "500";
    }
}


module.exports = {
    createdUser,
    updatedUser
}