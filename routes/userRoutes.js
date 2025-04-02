const express = require("express")
const router = express.Router();
 
// const {register,login,profile} =require("../routes/controllers/userController");
const {login,profile,register } = require("../controllers/userController")



router.post('/register/', register)
router.get('/profile/', profile)
router.get('/login/', login)



module.exports = router;   