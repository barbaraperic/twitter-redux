import React from 'react'
import { useSelector } from 'react-redux'
import { formatTweet } from '../utils/helpers'

const Tweet = ({ id }) => {
  const tweets = useSelector(state => state.tweets)
  const users = useSelector(state => state.users)
  const authedUser = useSelector(state => state.authedUser)


  const tweet = tweets[id]
    ? formatTweet(tweets[id], users[tweets[id].author], authedUser)
    : null
    
  console.log('t', tweet)
  
  return (
    <div>

    </div>
  )
}

export default Tweet