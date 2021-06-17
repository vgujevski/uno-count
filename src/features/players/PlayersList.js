import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { AddEditPlayer } from './AddEditPlayer'
import { Player } from './Player'

export const PlayersList = () => {

  const [modalIsOpen, setIsOpen] = useState(false)

  const players = useSelector(state => state.players)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleAddPlayer = () => {
    openModal()
  }

  return (
    <div className="list">
      <div>
        <button className="button button__add_player" onClick={handleAddPlayer}>Add player</button>
      </div>
      {
        players.length === 0 ? (
          <div>
            <span>no players</span>
          </div>
        ) : (
            players.map((player) => (
              <Player key={player.playerId} {...player} />
            ))
          )
      }
      <AddEditPlayer
        isOpen={modalIsOpen}
        onRequestClose={closeModal}/>
    </div>
  )
}