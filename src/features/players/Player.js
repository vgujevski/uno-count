import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { AddScore } from './AddScore'
import { calcTotalPoints } from '../../utility/util'

import plusIcon from '../../images/add_black_48dp.svg'

export const Player = (player) => {

  const [modalIsOpen, setIsOpen] = useState(false)
  const history = useHistory()

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleAddPoints = () => {
    console.log('addPoints called');
    openModal()
  }

  const handleOnPlayerClick = () => {
    console.log('handleOnPlayerClick called');
    history.push(`/players/${player.playerId}`)
  }

  return (
    <div className="list__item">

      <div className="list__item-container" onClick={handleOnPlayerClick}>
        <div className="list__item-name">{player.playerName}</div>
        <div className="list__item-score">{calcTotalPoints(player.playerScores)}</div>
      </div>

      <button className="list__item-add_button" onClick={handleAddPoints}>
        <img src={plusIcon} alt="plus" />
      </button>

      <AddScore
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        player={player}
      />
    </div>
  )
}