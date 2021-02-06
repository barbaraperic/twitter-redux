import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatTweet, formatDate } from '../utils/helpers'
import { handleToggleLike } from '../actions/tweets'

import { TiArrowBackOutline, TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti'

const Tweet = ({ id }) => {
  const users = useSelector(state => state.users)
  const authedUser = useSelector(state => state.authedUser)
  const tweets = useSelector(state => state.tweets)

  const dispatch = useDispatch()

  const parentTweet = tweets[id] ? tweets[tweets[id].replyingTo] : null
  const tweet = tweets[id]
    ? formatTweet(tweets[id], users[tweets[id].author], authedUser, parentTweet)
    : null

  if (tweet === null) {
    return <p>The tweet doesn't exist</p>
  }

  const handleLike = (e) => {
    e.preventDefault()
    dispatch(handleToggleLike({
      id: tweet.id,
      hasLiked: tweet.hasLiked,
      authedUser
    }))
  }
  
  return (
    <Link to={`/tweet/${id}`} className="tweet">
      <img 
        src={tweet.avatarURL} 
        alt="Avatar"
        className="avatar"
      />
      <div>
        <p style={{ margin: 0 }}>{tweet.name}</p>
        <small style={{ fontSize: "11px"}}>{formatDate(tweet.timestamp)}, </small>
        {parentTweet ?
          <button className="reply-btn">
            Replying to @{tweet.parent.author}
          </button>
          : null
        }
        <p>{tweet.text}</p>
        <div className="tweet-icons">
          <button className="tweet-btn">
            <TiArrowBackOutline style={{ marginRight: '8px'}} className="tweet-icon"/>
          </button>
          <span>{tweet.replies || null}</span>
          <button className="tweet-btn" onClick={handleLike}>
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