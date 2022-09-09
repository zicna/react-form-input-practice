import { useState } from 'react'

const useInput = () => {
  const [enteredInput, setEnteredInput] = useState('')
  const [enteredInputIsValid, setEnteredInputIsValid] = useState(false)
  const [inputTouched, setInputTouched] = useState(false)

  const inputChangeHandler = (event) => {
    setInputTouched(true)
    setEnteredInput(event.target.value)
    if (event.target.value === '') {
      setEnteredInputIsValid(false)
    } else {
      setEnteredInputIsValid(true)
    }
  }

  const inputLostFocus = (event) => {
    setInputTouched(true)
    if (enteredInput === '') {
      setEnteredInputIsValid(false)
    }
  }

  const inputIsNotValid = !enteredInputIsValid && inputTouched

  return{
    enteredInput,
    enteredInputIsValid,
    inputTouched,
    inputIsNotValid,
    inputChangeHandler,
    inputLostFocus
  }
}

export default useInput
