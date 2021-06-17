import React from 'react'

import { PlayersList } from '../features/players/PlayersList'

export const GameSessionPage = () => {
  return (
    <div className="content-container">
      <div className="game-session">
        Game Session Page
        <PlayersList />

      </div>
    </div>
  )
}