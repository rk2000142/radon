const jwt = require("jsonwebtoken");
const userModel = require("../models/bookModel");

const createUser = async function(req, res) {
    let data = req.body;
    let savedData = await userModel.create(data);
    //console.log(req.newAtribute);
};

const loginUser = async function(req, res) {
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password});
    if(!user)
     return res.send({
        status: false,
        msg: "username or the password is not correct"
     });
}





const basicCode= async function(req, res) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    }



















const upadteUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser;
module.exports.getUsersData= getUsersData;
module.exports.upadteUser= upadteUser;
module.exports.loginUser = loginUser;