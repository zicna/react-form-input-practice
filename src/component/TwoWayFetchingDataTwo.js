import React, { useRef } from 'react'

export default function TwoWayFetchingDataTwo() {
  const nameRef = useRef('')
  const emailRef = useRef('')

  const formSubmitHandler = (event) => {
    event.preventDefault()
    console.log('duvaj ga!!!')
    console.log({
      name: nameRef.current.value,
      email: emailRef.current.value,
    })

    // ! NOT BEST PRACTICE 
    // ! we are directly updating the DOM, we should leave it to React
    nameRef.current.value = ''
    emailRef.current.value = ''
  }
  return (
    <form className="form">
      <h2>Use Ref to fetch input</h2>
      <div>
        <label htmlFor="name">Name </label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div>
        <label htmlFor="email">Email </label>
        <input type="text" id="email" ref={emailRef} />
      </div>
      <div>
        <button onClick={formSubmitHandler}>Submit</button>
      </div>
    </form>
  )
}
