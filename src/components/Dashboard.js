import React from 'react'
import { useSelector } from 'react-redux'
import Tweet from './Tweet'

const Dashboard = () => {
  const tweets = useSelector(state => state.tweets)
  const tweetId = Object.keys(tweets)
  .sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
  
  return (
    <div>
      {tweetId.map(id => (
      <li key={id}>
        <Tweet id={id}/>
      </li>
      ))}
    </div>
  )
}

export default Dashboard