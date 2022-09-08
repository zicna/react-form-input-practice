import React, { useState, useRef } from 'react'

import styles from './SimpleInput.module.css'
const SimpleInput = () => {
  const nameRef = useRef('')
  const [name, setName] = useState('')
  const [isNameValid, setIsNameValid] = useState(true)
//   const [wasNameVisited, setWasNameVisited ] = useState(false)

  const formSubmitHandler = (event) => {
    event.preventDefault()
    if (nameRef.current.value === '') {
      setIsNameValid(false)
      return
    }
    setIsNameValid(true)
    setName(nameRef.current.value)

    console.log({
      name: nameRef.current.value,
    })
    setName("")
  }

  const nameChangeHandler = (event) => {
    setName(event.target.value)
  }
  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name"></label>
          <input type="text" id="name" ref={nameRef} value={name} onChange={nameChangeHandler} />
        </div>
        <div className={styles.formGroup}>
          <button onClick={formSubmitHandler}>Submit</button>
        </div>
        <div>{isNameValid ? '' : 'name can NOT be empty'}</div>
      </form>
    </div>
  )
}

export default SimpleInput
