export const populate = (populate: string) => {
  const convertToArray = populate.split(",")
  let populateObject = {}
  convertToArray.forEach((item) => {
    populateObject = {
      ...populateObject,
      [item]: true,
    }
  })

  return populateObject
}