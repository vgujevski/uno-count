import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { ScoresList } from '../features/player-scores/ScoresList'
import { playerRemoved } from '../features/players/playersListSlice'

import backIcon from '../images/arrow_back_white_48dp.svg'
import deleteIcon from '../images/delete_forever_white_48dp.svg'

export const PlayerPage = () => {
  const { playerId } = useParams()
  const dispatch = useDispatch()
  const history = useHistory()
  const playerName = useSelector(state => state.players.find(player => player.playerId === playerId)).playerName

  // TODO add confirmation dialog
  const handleDeletePlayerClick = () => {
    console.log('handleDeletePlayerClick called with id: ', playerId);
    // delete player
    dispatch(playerRemoved({ playerId }))
    // navigate to GameSessionPage
    history.push(`/`)
  }

  const handleBackClick = () => {
    // navigate to GameSessionPage
    history.push(`/`)
  }

  return (
    <div>
      <div className="top_bar">
        <div className="top_bar-content">
          <button className="button button__icon" onClick={handleBackClick}>
            <img src={backIcon} alt="add player" />
          </button>
          <div className="top_bar-name">{playerName}</div>
          <div className="button top_bar-blank" onClick={handleDeletePlayerClick}>
            <img src={deleteIcon} alt="remove player" />
          </div>
        </div>
      </div>
      <ScoresList playerId={playerId} />
    </div>
  )
}