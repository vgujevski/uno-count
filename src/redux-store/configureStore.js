import { configureStore } from '@reduxjs/toolkit'

import playersReducer from '../features/players/playersListSlice'

export default configureStore({
    reducer: {
        players: playersReducer
    }
})