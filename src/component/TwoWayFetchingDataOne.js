import { useState } from 'react'

const TwoWayFetchingDataOne = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const nameChangeHandler = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }
  const emailChangeHandler = (event) => {
    console.log(event.target.value)
    setEmail(event.target.value)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    console.log({name, email})

    // ! this works with regular JS but here we are using double bonding
    // event.target.closest(".form").reset()

    setEmail("")
    setName("")
  }
  return (
    <form className='form'>
      <h2>Listen to keystroke and update state</h2>
      <div>
        <label htmlFor="name">Name </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="email">Email  </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={emailChangeHandler}
        />
      </div>
      <div>
        <button onClick={formSubmitHandler}>Submit</button>
      </div>
    </form>
  )
}

export default TwoWayFetchingDataOne
