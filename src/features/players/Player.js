import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { AddScore } from './AddScore'
import { calcTotalPoints } from '../../utility/util'

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
      <button onClick={handleOnPlayerClick}>{player.playerName}</button>
      {calcTotalPoints(player.playerScores)}
      <button onClick={handleAddPoints}>add points</button>
      <AddScore
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        player={player}
      />
    </div>
  )
}