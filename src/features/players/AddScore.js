import React, { useState } from 'react'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { playerScoreAdded } from './playersListSlice'
import { calcTotalPoints } from '../../utility/util'

export const AddScore = ({ isOpen, onRequestClose, player }) => {
  const [score, setScore] = useState('')
  const dispatch = useDispatch()

  const handleCloseModal = () => {
    console.log('onReqestClose called');
    onRequestClose()
    setScore('')
  }
  const handleSubmit = (event) => {
    addScoreToPlayer()
    handleCloseModal()
    event.preventDefault();
  }

  const handleChange = (event) => {
    setScore(event.target.value)
  }

  const handleAdd = () => {
    console.log('handleAdd called with: ', score);
    addScoreToPlayer()
    setScore('')
  }

  const addScoreToPlayer = () => {
    if (isScoreValid(score)) {
      dispatch(playerScoreAdded({
        playerId: player.playerId,
        score: {
          scoreId: uuidv4(),
          amount: score
        }
      }))
    } else {
      console.error('add score failed, entered score was not valid');
    }
  }

  const isScoreValid = (score) => {
    console.log('isScoreValid called');
    if (score) {
      return true
    } else {
      return false
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}>

      <div>
        Add score for: {player.playerName}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Current score: {calcTotalPoints(player.playerScores)}
          <input type="number" value={score} onChange={handleChange} />

        </label>
        <button type="button" onClick={handleAdd}>+</button>
        <button type="button" onClick={handleCloseModal}>X</button>
        <input type="submit" value="Submit" />
      </form>
    </Modal>
  )
}