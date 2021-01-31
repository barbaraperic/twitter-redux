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

export const toggleLike = ({ id, authedUser, hasLiked}) => {
  return {
    type: TOGGLE_LIKE,
    id,
    authedUser,
    hasLiked
  }
}

export const handleAddTweet = (tweet) => {
  return (dispatch, getState) => {
    dispatch(showLoading())
    const { authedUser } = getState()
    
    return saveTweet({
      ...tweet,
      authedUser
    })
    .then((tweet) => dispatch(addTweet(tweet)))
    .then(() => hideLoading())
  }
}

export const handleToggleLike = (tweet) => {
  return (dispatch, getState) => {

    const { authedUser } = getState();

    return saveLikeToggle({
      ...tweet,
      authedUser

    }).then((tweet) => dispatch(toggleLike(tweet)))
  }
}