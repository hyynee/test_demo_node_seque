const getFood = (req, res) => {
    // const sql = "SELECT * FROM food" //.fillter()
    // // truy vấn data
    // conn.promise().query(sql)
    //     .then((result) => {
    //         console.log(res.send(result))
    //     })
    //     .catch(res.send("error"))
    res.send("Danh sách food");
}
const findFood = (req, res) => {
    res.send("Tìm food");
}
export {getFood,findFood}


// dịnh nghĩa các chức năng của đối tượng