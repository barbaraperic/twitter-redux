import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatTweet, formatDate } from '../utils/helpers'

import { TiArrowBackOutline, TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti'

const Tweet = ({ id }) => {
  const tweets = useSelector(state => state.tweets)
  const users = useSelector(state => state.users)
  const authedUser = useSelector(state => state.authedUser)

  console.log('ID', id)
  // const parentTweet = tweets[id] ? tweets[tweets[id].replyingTo] : null

  const tweet = tweets[id]
    ? formatTweet(tweets[id], users[tweets[id].author], authedUser)
    : null

  console.log('parentTweet', parentTweet)
  
  return (
    <Link to={`/tweet/${id}`} className="card-container">
      <img 
        src={tweet.avatarURL} 
        alt="Avatar"
        className="avatar"
      />
      <div>
        <p style={{ margin: 0 }}>{tweet.name}</p>
        <small style={{ fontSize: "11px"}}>{formatDate(tweet.timestamp)}</small>
        <p>{tweet.text}</p>
        <div className="tweet-icons">
          <button className="tweet-btn">
            <TiArrowBackOutline style={{ marginRight: '8px'}} className="tweet-icon"/>
          </button>
          <button className="tweet-btn">
            {tweet.hasLiked === true
              ? <TiHeartFullOutline color='#e0245e' className="tweet-icon"/>
              : <TiHeartOutline className="tweet-icon"/>
            }
          </button>
          <span>{tweet.likes || null}</span>
        </div>
      </div>
    </Link>
  )
}

export default Tweet