export const getSlides = async () => {
  return await fetch(`${process.env.REACT_APP_API_URL}/slide`, {
    method: 'GET'
  })
};

export const postSlide = async () => {
  return await fetch(`${process.env.REACT_APP_API_URL}/slide`, {
    method: 'POST'
  })
}

export const postMonth = async (id) => {
  return await fetch(`${process.env.REACT_APP_API_URL}/MonthRelease`, {
    method: 'POST',
    body: JSON.stringify({ id }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
