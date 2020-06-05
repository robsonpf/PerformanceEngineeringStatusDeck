const express = require("express")
const router = express.Router()
const slideController = require("../controllers/slide")

router.get("/", slideController.getAllSlides)

module.exports = router