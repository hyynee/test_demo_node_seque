// DAO
// mapping với table trong CSDL
import { Model , DataTypes} from "sequelize"
import sequelize from "./index.js"
class User extends Model {

}
User.init({
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    full_name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    pass_word: {
        type: DataTypes.STRING
    }
},{
    sequelize,
    modelName: "User",
    tableName: "User",
    timestamps: false
});
export default User