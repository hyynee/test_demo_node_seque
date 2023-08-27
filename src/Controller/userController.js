const getUser = (req,res) => {
    res.send("LIST")
}
const findUser = (req,res) => {
    res.send("Search")
}

export {getUser,findUser}