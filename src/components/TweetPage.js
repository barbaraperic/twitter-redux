import React from 'react'
import { useParams } from 'react-router-dom'

import Tweet from './Tweet'

const TweetPage = () => {
  const { id } = useParams()
  
  console.log('>>', id)
  return (
    <div>
      <Tweet id={id}/>
    </div>
  )
}

export default TweetPage