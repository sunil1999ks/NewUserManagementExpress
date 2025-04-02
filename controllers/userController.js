let User = require("../models/user")



let register = async (req, res) => {
    // let email = req.body.email;
    // let name = req.body.name;
    // let password = req.body.password;
    
    // console.log(req.body);
    let {name, email, password} = req.body

    console.log(email, name, password);

    let user = new User({email,name,password})

    await user.save()
    
    
    res.send('This is register page')
    
}



let profile = (req, res) => {res.send('This is profile page')}
let login = (req, res) => {res.send('This is LOGIN page')}


module.exports={

    login,
    register,

    profile}