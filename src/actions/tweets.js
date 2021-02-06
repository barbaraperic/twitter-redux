import { saveTweet } from '../utils/api'
import { saveLikeToggle } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const ADD_TWEET = 'ADD_TWEET'
export const TOGGLE_LIKE = 'TOGGLE_LIKE'
 
export const receiveTweets = (tweets) => {
  return {
    type: RECEIVE_TWEETS,
    tweets
  }
}

export const addTweet = (tweet) => {
  return {
    type: ADD_TWEET,
    tweet
  }
}

export function handleAddTweet (text, replyingTo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveTweet({
      text,
      author: authedUser,
      replyingTo
    })
      .then((tweet) => dispatch(addTweet(tweet)))
      .then(() => dispatch(hideLoading()))
  }
}

export const toggleLike = ({ id, authedUser, hasLiked}) => {
  return {
    type: TOGGLE_LIKE,
    id,
    authedUser,
    hasLiked
  }
}

export const handleToggleLike = (info) => {
  return (dispatch, getState) => {

    dispatch(toggleLike(info))

    return saveLikeToggle(info)
      .catch(e => {
        console.warn('Error in handleToggleTweet: ', e)
        dispatch(toggleLike(info))
        alert('The was an error liking the tweet. Try again.')
      })
  }
}