export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export const formatTweet = (tweet, author, authedUser, parentTweet ) => {

  const { id, likes, replies, text, timestamp } = tweet
  const { name, avatarURL } = author

  return {
    id,
    text,
    name,
    authedUser,
    avatarURL,
    timestamp,
    hasLiked: likes.includes(authedUser),
    likes: likes.length,
    replies: replies.length,
    parent: !parentTweet ? null : {
      author: parentTweet.author,
      id: parentTweet.id,
    }
  }
}