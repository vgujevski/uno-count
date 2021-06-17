import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    playerId: '1',
    playerName: 'Pepe',
    playerScores: []
  },
  {
    playerId: '2',
    playerName: 'Jumba',
    playerScores: []
  },
  {
    playerId: '3',
    playerName: 'Dulin',
    playerScores: []
  },
  {
    playerId: '4',
    playerName: 'Gondo',
    playerScores: []
  },
]

const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    playerAdded(state, action) {
      console.log('playerAdded dispatched', JSON.stringify(action))
      state.push(action.payload)
    },
    playerRemoved(state, action) {
      console.log('playerRemoved dispatched', JSON.stringify(action))
      return state.filter(player => player.playerId !== action.payload.playerId)
    },
    playerScoreAdded(state, action) {
      state.find(player => player.playerId === action.payload.playerId)
        .playerScores
        .push(action.payload.score)
    },
    playerScoreRemoved(state, action) {
      const player = state.find(player => player.playerScores.find(score => score.scoreId === action.payload.scoreId) != null)
      if(player){
        player.playerScores = player.playerScores.filter(score => score.scoreId !== action.payload.scoreId) 
      }
    }
  }
})

export const { playerAdded, playerRemoved, playerScoreAdded, playerScoreRemoved } = playersSlice.actions

export default playersSlice.reducer