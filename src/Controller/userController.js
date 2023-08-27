import User from "../Models/user.js"


const getUser = async (req,res) => {
    // SELECT * FROM user
    let data = await User.findAll();
    res.send(data)
    /* 
    bất đồng bộ: asynchronous
    không lấy dc data do bất đồng bộ giữa 2 thằng độc lập với nhau (CSDL VS JS)
    */
}
const findUser = (req,res) => {
    res.send("Search")
}

export {getUser,findUser}