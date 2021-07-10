import React, { useState, useEffect, useRef } from 'react'
import Modal from 'react-modal'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'

import { playerAdded } from './playersListSlice'

import personIcon from '../../images/person_black_48dp.svg'
import doneIcon from '../../images/done_black_48dp.svg'
import closeIcon from '../../images/close_black_48dp.svg'


export const AddEditPlayer = ({ isOpen, onRequestClose }) => {
  const [playerName, setPlayerName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    Modal.setAppElement('body');
  })

  let initialRender = useRef(true)

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
    } else {
      validateForm()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerName])

  //FIXME should not be able to submit empty input field adter initial render 

  const handleSubmit = (event) => {
    validateForm()
    if (!errorMessage) {
      addPlayer(
        {
          playerId: uuidv4(),
          playerName: playerName,
          playerScores: []
        })
      handleCloseModal()
      initialRender.current = true
    }
    event.preventDefault();
  }

  const addPlayer = (player) => {
    console.log('addPlayer called with: ', player);
    dispatch(playerAdded(player))
  }

  const handleChange = (event) => {
    console.log('handleChange called');
    setPlayerName(event.target.value)
  }

  const handleCloseModal = () => {
    setPlayerName('')
    setErrorMessage('')
    onRequestClose()
    initialRender.current = true
  }

  const validateForm = () => {
    console.log('validateForm called');
    if (0 < playerName.length && playerName.length <= 10) {
      setErrorMessage('')
    } else if (playerName.length === 0) {
      setErrorMessage('please enter name')
    } else if (playerName.length > 10) {
      setErrorMessage('name should be less than 10 characters')
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      closeTimeoutMS={200}
      className="modal">


      <div className="modal-container">

        <img src={personIcon} alt="person" />

        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" autoFocus value={playerName} onChange={handleChange} placeholder="enter name" />
          </label>

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

      {errorMessage && <div>Error: {errorMessage}</div>}
    </Modal>
  )
}