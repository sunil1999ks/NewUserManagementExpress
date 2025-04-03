let User = require("../models/user")
let bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken")



let register = async (req, res) => {
    let { email, name, password } = req.body;
    console.log(email, name, password);

    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    let user = new User({ email, name, password });
    await user.save();

    let payload = { id: user.id };

    jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '1h' },
        (err, token) => {
            if (err) {
                throw err;
            } else {
                res.send(token);
            }
        }
    );
};




const login = async (req, res) => {

    let { inp_email, inp_password } = req.body;

    let user = await User.findOne({ email: inp_email });

    let isValidPWD = await bcrypt.compare(inp_password, user.password)

    if (!isValidPWD) {
        res.status(400).send("User not found!!");
    }

    res.status(200).json(user);

};



let profile = async (req, res) => {
    res.status(200).json(user)


}


const transaction = async (req, res) => {
    res.status(200).send("this is transaction page ")

}

const wishlist = async (req, res) => {
    res.status(200).send("this is transaction page ")

}

module.exports = {

    login,
    register,

    profile,
    transaction,
    wishlist
}