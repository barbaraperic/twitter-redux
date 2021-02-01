export const formatTweet = (tweet, author, authedUser ) => {

  const { id, likes, replies, text, timestamp } = tweet
  const { name, avatarURL } = author

  return {
    id,
    text,
    name,
    authedUser,
    avatarURL,
    likes: likes.length,
    replies: replies.length,
    timestamp
  }
}