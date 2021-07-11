import React from 'react'
import { useSelector } from 'react-redux'

import { ScoresListItem } from './ScoresListItem'

export const ScoresList = ({ playerId }) => {

  const scores = useSelector(state => state.players.find(player => player.playerId === playerId)).playerScores

  return (
    
      <div className="list">
      {
          scores.length === 0 ? (
            <div>
              <span>no scores</span>
            </div>
          ) : (
              scores.map((score) => (
                <ScoresListItem key={score.scoreId} {...score} />
              ))
            )
        }
      </div>
  )
}