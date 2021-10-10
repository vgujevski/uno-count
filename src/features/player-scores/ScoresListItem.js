import React from 'react'
import { useDispatch } from 'react-redux'

import { playerScoreRemoved } from '../players/playersListSlice'
import closeIcon from '../../images/close_white_48dp.svg'

export const ScoresListItem = (score) => {

  const dispatch = useDispatch()

  const handleDeleteScoreClick = () => {
    console.log('handleDeleteScoreClick called with id: ', score.scoreId);
    dispatch(playerScoreRemoved({ scoreId: score.scoreId }))
  }

  return (
    <div className="list__item">
      <span>{score.amount}</span>
      <button className="button dark button__icon" onClick={handleDeleteScoreClick}>
        <img src={closeIcon} alt="add player" />
      </button>
    </div>
  )
}