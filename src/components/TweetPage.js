import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Tweet from './Tweet'
import NewTweet from './NewTweet'

const TweetPage = () => {
  const { id } = useParams()
  const tweets = useSelector(state => state.tweets)

  const replies = tweets[id].replies.map(replyId => replyId)
  
  return (
    <div>
      <Tweet id={id}/>
      <NewTweet />
      {replies 
      ? replies.map(replyId => (
          <Tweet id={replyId}/>
        ))
      : null
      }
    </div>
  )
}

export default TweetPage