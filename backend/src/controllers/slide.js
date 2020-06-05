const models = require("../models/slide");

const getAllSlides = async (req, res, next) => {
  try {
    const slides = await models.getAllSlides(req.body);

    if (slides.error) {
      req.status(404).json(slides)
    } else {
      req.status(200).json(slides)
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllSlides
}