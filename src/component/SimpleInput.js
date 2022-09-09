import React, { useState } from 'react'

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [nameTouched, setNameTouched] = useState(false)

  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false)
  const [emailTouched, setEmailTouched] = useState(false)

  let formIsInvalid = true

  const nameChangeHandler = (event) => {
    setNameTouched(true)
    setEnteredName(event.target.value)
    if (event.target.value === '') {
      setEnteredNameIsValid(false)
    } else {
      setEnteredNameIsValid(true)
    }
  }

  const nameLostFocus = (event) => {
    setNameTouched(true)
    // console.log(event)
    if (enteredName === '') {
      setEnteredNameIsValid(false)
    }
  }
  const emailChangeHandler = (event) => {
    setEmailTouched(true)
    setEnteredEmail(event.target.value)
    if (!event.target.value.includes("@")) {
      setEnteredEmailIsValid(false)
    } else {
      setEnteredEmailIsValid(true)
    }
  }

  const emailLostFocus = (event) => {
    setEmailTouched(true)
    // console.log(event)
    if (enteredName === '') {
      setEnteredEmailIsValid(false)
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
    if(!enteredEmail.includes("@")){
      setEnteredEmailIsValid(false)
      return 
    }
    setEnteredEmailIsValid(true)
    setEnteredNameIsValid(true)

    console.log({
      name: enteredName,
      email: enteredEmail
    })

    setEnteredName('')
    setNameTouched(false)
    setEnteredNameIsValid(false)

    setEnteredEmail('')
    setEmailTouched(false)
    setEnteredEmailIsValid(false)
  }

  const nameIsNotValid = !enteredNameIsValid && nameTouched
  const emailIsNotValid = !enteredEmailIsValid && emailTouched
  if(enteredNameIsValid && enteredEmailIsValid){
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
      <div className="form-actions">
        <button disabled={formIsInvalid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
