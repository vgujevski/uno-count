export const calcTotalPoints = (pointsObjArray) => {
  const pointsArray = pointsObjArray.map((obj) => obj.amount)
  return pointsArray.reduce((a, b) => parseInt(a) + parseInt(b), 0)
}