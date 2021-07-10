import React, { useState } from 'react'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { playerScoreAdded } from './playersListSlice'
import { calcTotalPoints } from '../../utility/util'

import doneIcon from '../../images/done_black_48dp.svg'
import closeIcon from '../../images/close_black_48dp.svg'
import addIcon from '../../images/add_black_48dp.svg'

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
      onRequestClose={handleCloseModal}
      closeTimeoutMS={200}
      className="modal">

      <div className="add-score-container">
        <p className="player-name">
          {player.playerName}
        </p>
        <p className="player-score">
          {calcTotalPoints(player.playerScores)}
        </p>
        <form onSubmit={handleSubmit}>

          <div className="inputs-container">
            <input type="number" autoFocus value={score} onChange={handleChange} />
            <button type="button" onClick={handleAdd} className="button button__icon">
              <img src={addIcon} alt="add" />
            </button>
          </div>

          <div className="buttons-container">
            <button type="button" onClick={handleCloseModal} className="button button__icon">
              <img src={closeIcon} alt="close" />
            </button>
            <button type="submit" onClick={handleSubmit} className="button button__icon">
              <img src={doneIcon} alt="done" />
            </button>
          </div>

        </form>
      </div>

    </Modal>
  )
}