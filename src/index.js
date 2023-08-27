// let a = "mai mai yeu em";
// console.log(a);
// // export import
// // ES module: ECMA Script module
// import tinhTong from "./home.js";
// console.log(tinhTong());
// // không chạy được nên phải chuyển từ js ==> mjs (vào cmd gõ node index.mjs) ==> vô lý 

// // commonjs module 
// const tinhTong = require('./home.js');
// console.log(tinhTong());

// node_modules ==> source thư viện
// package.json ==> tên thư viện của version bằng cấu trúc json


// cài đặt yarn: npm install -g yarn
// yarn init (enter) => tạo file package.json
// yard add express ==> framework tạo server backend

// npm i = yarn install
// npm istall ==> yarn add
// npm uninsatll ==> yarn remove

import express from 'express';
const app = express();
app.use(express.json()) // Hàm gọi middleware (Hàm gọi middleware chuyển đổi cấu trúc json để backend nhận được )
import cors from 'cors'
app.use(cors({
    origin:"*"
})); // middleware chấp nhận tất cả FE truy cập vào
app.listen(8080); // ==> khởi tạo server với port tự quy định
// ctrl + c : tắt server
// localhost:8080

// yarn add nodemon => auto reset server khi save

// API
// localhost: 8080/demo
// tham số 1: endpoint , params
// tham số 2: request, response
/*
request = req
response = res
*/
// app.get("/demo/:id/:email", (req, res) => {
//     // tất cả dữ liệu lấy từ url đều là string(chuỗi)
//     // nhận từ url: params
//     // + query string: localhost: 8080/demo ? id=1 & email=abc@gmail.com
//     // let id = request.query.id; // destructering
//     // let email = request.query.email;
//     // let { id, email } = req.query
//     // + query params: localhost: 8080/demo/1/a@gmail.com
//     let { id, email } = req.params
//     // nhận json : body
//     let { hoTen, phone } = req.body
//     res.status(200).send({ id, email, hoTen, phone }) // trả về bất kỳ dữ liệu nào trừ number
// });

/* 
Kết nối CSDL
*/
// yarn add mysql2
// setup mysql2
// const mysql2 = require("mysql2");
// import mysql2 from "mysql2";
// const conn = mysql2.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "24092004",
//     database: "db_node33",
//     port: "3306"
// })
// endpoint: viết thường và cách nhau bởi gạch ngang
// ví dụ: get-food, ored-food


app.get("/user/get-user")
app.get("/food/get-order")
/*
Kết nối FE với BE
2 cái
*/
// yarn add cors

// https://localhost:8080/api           /food              /get-food
// https://localhost:8080/api           /user              /get-user
// app.get("/api",foodRoutes)
// tách food/get-food ra riêng khỏi api => tách chức năng vs routes ra riêng
// app.get("/api/food/get-food",findFood)
import rootRoutes from './Routes/rootRoutes.js';
app.use("/api",rootRoutes) // sửa get thành use
// app.use("/user",userRoutes) => user/get-user