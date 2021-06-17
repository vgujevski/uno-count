import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { ScoresList } from '../features/player-scores/ScoresList'
import { playerRemoved } from '../features/players/playersListSlice'

export const PlayerPage = () => {
  const { playerId } = useParams()
  const dispatch = useDispatch()
  const history = useHistory()

  const handleDeletePlayerClick = () => {
    console.log('handleDeletePlayerClick called with id: ', playerId);
    // delete player
    dispatch(playerRemoved({playerId}))
    // navigate to GameSessionPage
    history.push(`/`)
  }

  return (
    <div className="content-container">
      player page,
      show playe score
      {playerId}
      <button onClick={handleDeletePlayerClick}>x</button>
      <ScoresList playerId={playerId}/>
    </div>
  )
}