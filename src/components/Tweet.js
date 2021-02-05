import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatTweet, formatDate } from '../utils/helpers'

import { TiArrowBackOutline, TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti'

const Tweet = ({ id }) => {
  const users = useSelector(state => state.users)
  const authedUser = useSelector(state => state.authedUser)
  const tweets = useSelector(state => state.tweets)

  console.log('ID', typeof id)
  
  const parentTweet = tweets[id] ? tweets[tweets[id].replyingTo] : null
  const tweet = tweets[id]
    ? formatTweet(tweets[id], users[tweets[id].author], authedUser, parentTweet)
    : null

  console.log(tweet)
  // if (tweet === null) {
  //   return <p>The tweet doesn't exist</p>
  // }
  
  return (
    <Link to={`/tweet/${id}`} className="tweet">
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
          <span>{tweet.replies || null}</span>
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