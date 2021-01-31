import React from 'react';
import { useSelector } from 'react-redux';

const Feed = () => {
  const tweets = useSelector(state => state.tweets)
  const users = useSelector(state => state.users)

  console.log('tweets', tweets)
  console.log('users', users)

  const tweetData = Object.keys(tweets)
    .map(tweet => tweets[tweet])
    .sort((a, b) => b.timestamp - a.timestamp)

  const authorData = Object.keys(users)
    .map(item => users[item])

  console.log('>>',authorData)

  return (
    <div>
      {/* {authorData.map(item => (
        <div>
          <img src={item.avatarURL} alt="Avatar"/>
          <p>{item.name}</p>
        </div>
      ))} */}
      <div>
        {tweetData.map(item => (
          <div>
            <p>{item.author}</p>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Feed