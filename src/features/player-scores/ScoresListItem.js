import React from 'react'
import { useDispatch } from 'react-redux'

import { playerScoreRemoved } from '../players/playersListSlice'

export const ScoresListItem = (score) => {

  const dispatch = useDispatch()

  const handleDeleteScoreClick = () => {
    console.log('handleDeleteScoreClick called with id: ', score.scoreId);
    dispatch(playerScoreRemoved({scoreId: score.scoreId}))
  }

  return (
    <div className="list__item">
      <span>{score.amount}</span>
      <button onClick={handleDeleteScoreClick}>x</button>
    </div>
  )
}