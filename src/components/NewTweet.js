import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { handleAddTweet } from '../actions/tweets'

const NewTweet = () => {

  const [ input, setInput ] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(handleAddTweet({
      text: input
    }))
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