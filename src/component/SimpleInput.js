import React, { useState, useRef, useEffect } from 'react'

import styles from './SimpleInput.module.css'
const SimpleInput = () => {
  const nameRef = useRef('')
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  const [formIsValid, setFormIsValid] = useState(false)

  useEffect(() => {
    if (enteredNameIsValid) {
      setFormIsValid(true)
    }else{
      setFormIsValid(false)

    }
  }, [enteredNameIsValid])

  const formSubmitHandler = (event) => {
    event.preventDefault()
    setEnteredNameTouched(true)

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return
    }
    setEnteredNameIsValid(true)

    console.log({
      name: enteredName,
    })

    setEnteredNameTouched(false)
    setEnteredNameIsValid(false)
    setEnteredName('')
  }

  const nameChangeHandler = (event) => {
    console.log('entered name changed')
    if (event.target.value.trim() === '') {
      setEnteredName(event.target.value)
      setEnteredNameIsValid(false)
      setEnteredNameTouched(true)
    } else {
      setEnteredName(event.target.value)
      setEnteredNameIsValid(true)
      setEnteredNameTouched(true)
    }
  }

  const nameLostFocus = () => {
    console.log('input lost focus')
    setEnteredNameTouched(true)
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched
  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameLostFocus}
          />
        </div>
        <div className={styles.form}>
          <button disabled={!formIsValid} onClick={formSubmitHandler}>Submit</button>
        </div>
        <div>{nameInputIsInvalid ? 'name can NOT be empty' : ''}</div>
      </form>
    </div>
  )
}

export default SimpleInput
