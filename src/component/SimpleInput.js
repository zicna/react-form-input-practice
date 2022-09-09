import React, { useState, useEffect } from 'react'

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [nameTouched, setNameTouched] = useState(false)
  const [formIsInvalid, setFormIsInvalid] = useState(true)

  useEffect(() => {
    setFormIsInvalid(!enteredNameIsValid)
  }, [enteredNameIsValid])

  const nameChangeHandler = (event) => {
    setNameTouched(true)
    setEnteredName(event.target.value)
    if (event.target.value === '') {
      setEnteredNameIsValid(false)
    } else {
      setEnteredNameIsValid(true)
    }
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    console.log('form submiting...')
    setNameTouched(true)

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return
    }
    setEnteredNameIsValid(true)

    console.log({
      name: enteredName,
    })

    setEnteredName('')
    setNameTouched(false)
    setEnteredNameIsValid(false)
  }

  const nameLostFocus = (event) => {
    setNameTouched(true)
    console.log(event)
    if (enteredName === '') {
      setEnteredNameIsValid(false)
    }
  }

  const nameIsNotValid = !enteredNameIsValid && nameTouched

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
      <div className="form-actions">
        <button disabled={formIsInvalid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
