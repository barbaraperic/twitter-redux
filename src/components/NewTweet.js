import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { handleAddTweet } from '../actions/tweets'

const NewTweet = ({ id }) => {
  const tweets = useSelector(state => state.tweets)

  const [ input, setInput ] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  console.log('INPUT', input)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(handleAddTweet(
      input,
      id
    ))
    history.push("/")
  }

  return (
    <div>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <textarea 
          className="textarea" 
          placeholder="What is happening?" 
          maxLength="280"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  )
}

export default NewTweet