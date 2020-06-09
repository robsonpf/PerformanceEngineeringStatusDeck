export const postSlide = async () => {
  return await fetch(`${process.env.REACT_APP_API_URL}/slide`, {
    method: 'POST'
  })
}
