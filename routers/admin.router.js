const express = require("express");
const admin = require("../controllers/admin")

const router = express.Router();


router.post("/admin/register",admin.registerPage);
router.post("/admin/login",admin.login)

// activate link
//router.get("/link?activate=")
module.exports = router;