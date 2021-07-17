export const calcTotalPoints = (pointsObjArray) => {
  const pointsArray = pointsObjArray.map((obj) => obj.amount)
  return pointsArray.reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

export const saveToLocalStorage = (state) => {
  try {
      localStorage.setItem('state', JSON.stringify(state))
  } catch (e) {
      console.log(e);
  }
}

export const loadFromLocalStorage = () => {
  console.log('loadFromLocalStorage called');
  try {
      const stateString = localStorage.getItem('state')
      return stateString ? JSON.parse(stateString) : undefined
  } catch (e) {
      console.log(e);
      return undefined
  }

}