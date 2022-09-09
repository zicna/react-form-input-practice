import React, { useState } from 'react'
import useInput from './hooks/use-input'

import emailValidation from './helpers/email-validation'

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [nameTouched, setNameTouched] = useState(false)

  const {
    enteredInput: enteredEmail,
    setEnteredInput: setEnteredEmail,
    enteredInputIsValid: enteredEmailIsValid,
    inputTouched: emailTouched,
    setInputTouched: setEmailTouched,
    inputIsNotValid: emailIsNotValid,
    inputChangeHandler: emailChangeHandler,
    inputLostFocus: emailLostFocus,
  } = useInput(emailValidation)

  const {
    enteredInput,
    setEnteredInput,
    enteredInputIsValid,
    inputTouched,
    setInputTouched,
    inputIsNotValid,
    inputChangeHandler,
    inputLostFocus,
  } = useInput((value) => {
    return value.trim() === '' ? false : true
  })

  let formIsInvalid = true

  const nameChangeHandler = (event) => {
    setNameTouched(true)
    setEnteredName(event.target.value)
    if (event.target.value.trim() === '') {
      setEnteredNameIsValid(false)
    } else {
      setEnteredNameIsValid(true)
    }
  }

  const nameLostFocus = (event) => {
    setNameTouched(true)
    if (enteredName === '') {
      setEnteredNameIsValid(false)
    }
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    console.log('form submiting...')
    setNameTouched(true)
    setEmailTouched(true)

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return
    }
    if (!enteredEmail.includes('@')) {
      return
    }
    setEnteredNameIsValid(true)

    console.log({
      name: enteredName,
      email: enteredEmail,
      input: enteredInput
    })

    setEnteredName('')
    setNameTouched(false)
    setEnteredNameIsValid(false)

    setEnteredEmail('')
    setEmailTouched(false)
    // setEnteredEmailIsValid(false)

    setEnteredInput('')
    setInputTouched(false)
  }

  const nameIsNotValid = !enteredNameIsValid && nameTouched
  // const emailIsNotValid = !enteredEmailIsValid && emailTouched
  if (enteredNameIsValid && enteredEmailIsValid && enteredInputIsValid) {
    formIsInvalid = false
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameLostFocus}
          value={enteredName}
        />
        {nameIsNotValid && <p>name can NOT be empty</p>}
      </div>
      <div className="form-control">
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailLostFocus}
          value={enteredEmail}
        />
        {emailIsNotValid && <p>email can NOT be empty</p>}
      </div>
      <div className="form-control">
        <label htmlFor="input">Your Input</label>
        <input
          type="text"
          id="input"
          onChange={inputChangeHandler}
          onBlur={inputLostFocus}
          value={enteredInput}
        />
        {inputIsNotValid && <p>input can NOT be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={formIsInvalid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
