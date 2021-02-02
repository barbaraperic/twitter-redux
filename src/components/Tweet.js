import React from 'react'
import { useSelector } from 'react-redux'
import { formatTweet, formatDate } from '../utils/helpers'

import { TiArrowBackOutline, TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti'

const Tweet = ({ id }) => {
  const tweets = useSelector(state => state.tweets)
  const users = useSelector(state => state.users)
  const authedUser = useSelector(state => state.authedUser)

  const tweet = tweets[id]
    ? formatTweet(tweets[id], users[tweets[id].author], authedUser)
    : null
  
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
        <p>{tweet.text}</p>
        <TiArrowBackOutline style={{ marginRight: '8px'}}/>
        {tweet.hasLiked === true
          ? <TiHeartFullOutline color='#e0245e'/>
          : <TiHeartOutline />
        }
      </div>
    </div>
  )
}

export default Tweet