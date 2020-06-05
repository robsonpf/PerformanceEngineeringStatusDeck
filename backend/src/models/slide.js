const slideQuery = require("../../query/slide");

const getAllSlides = async (body) => {
  try {
    const slides = await slideQuery.getAllSlides()
    console.log(slides)
    if (slides.length === 0) {
      return {
        error: "Not found",
        status: 404,
        message: "There are no slides"
      }
    }

    return slides
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  getAllSlides
}
