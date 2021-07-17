import { configureStore } from '@reduxjs/toolkit';
import { loadFromLocalStorage } from '../utility/util'

import playersReducer from '../features/players/playersListSlice'

const preloadedState = loadFromLocalStorage()
console.log(JSON.stringify(preloadedState, null, 2));

const reducer = {
    players: playersReducer
}

export default configureStore({
    reducer, preloadedState
}
)
