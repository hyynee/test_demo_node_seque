// kết nối csdl
import {Sequelize} from "sequelize"
const sequelize = new Sequelize("db_food","root","24092004",{
    host: "localhost",
    port: "3306",
    dialect: "mysql"
})
export default sequelize
