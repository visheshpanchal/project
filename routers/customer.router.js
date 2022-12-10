const express = require("express")

const router = express.Router();
const customer = require("../controllers/customer")
router.post("/customer/register/",customer.registerPage)


module.exports = router;