const express = require('express')
const router = express.Router()
const slideController = require('../controllers/slide')

router.get('/', slideController.getAllSlides)
router.post('/', slideController.createSlide)



// router.get('/', slideController.getById)
// router.put('/', slideController.putById)
// router.update('/', slideController.updateById)
