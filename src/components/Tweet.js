import React from 'react'
import { useSelector } from 'react-redux'
import { formatTweet, formatDate } from '../utils/helpers'

const Tweet = ({ id }) => {
  const tweets = useSelector(state => state.tweets)
  const users = useSelector(state => state.users)
  const authedUser = useSelector(state => state.authedUser)


  const tweet = tweets[id]
    ? formatTweet(tweets[id], users[tweets[id].author], authedUser)
    : null

  console.log('t', tweet)
  
  return (
    <div className="card-container">
      <img 
        src={tweet.avatarURL} 
        alt="Avatar"
        className="avatar"
      />
      <div>
        <p style={{ margin: 0 }}>{tweet.name}</p>
        <small style={{ fontSize: "11px"}}>{formatDate(tweet.timestamp)}</small>
      </div>
    </div>
  )
}

export default Tweet