export function saveToLocalStorage(state: any) {
  try {
    const stateAsString = JSON.stringify(state)
    localStorage.setItem('preload', stateAsString)
  }
  catch (error) {
    console.warn(error)
  }
}

export function getFromLocalStorage() {
  try {
    const stateAsString = localStorage.getItem('preload')
    if (stateAsString === null) {
      return undefined
    }
    return JSON.parse(stateAsString)
  }
  catch (error) {
    console.warn(error)
    return undefined
  }
}