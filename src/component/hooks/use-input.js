import { useState } from 'react'

const useInput = (validationFn) => {
  const [enteredInput, setEnteredInput] = useState('')
  const [inputTouched, setInputTouched] = useState(false)

  let enteredInputIsValid = validationFn(enteredInput)

  const inputChangeHandler = (event) => {
    console.log("input changed")
    setInputTouched(true)
    enteredInputIsValid = validationFn(event.target.value)
    setEnteredInput(event.target.value)
    
}

const inputLostFocus = (event) => {
    setInputTouched(true)
    enteredInputIsValid = validationFn(event.target.value)
  }

  const inputIsNotValid = !enteredInputIsValid && inputTouched

  return {
    enteredInput,
    setEnteredInput,
    enteredInputIsValid,
    setInputTouched,
    inputTouched,
    inputIsNotValid,
    inputChangeHandler,
    inputLostFocus,
  }
}

export default useInput
