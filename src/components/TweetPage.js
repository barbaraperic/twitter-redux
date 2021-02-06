import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Tweet from './Tweet'
import NewTweet from './NewTweet'

const TweetPage = () => {
  const { id } = useParams()
  const tweets = useSelector(state => state.tweets)

  const replies = !tweets[id]
  ? []
  : tweets[id].replies.sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)

  return (
    <div>
      <Tweet id={id}/>
      <NewTweet id={id}/>
      {replies 
      ? replies.map(replyId => (
        <li key={replyId}>
          <Tweet id={replyId}/>
        </li>
        ))
      : null
      }
    </div>
  )
}

export default TweetPage