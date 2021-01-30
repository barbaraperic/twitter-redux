import { saveTweet } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const ADD_TWEET = 'ADD_TWEET'
 
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

export const handleAddTweet = (tweet) => {
  return (dispatch, getState) => {
    dispatch(showLoading())
    const { authedUser } = getState()
    
    saveTweet({
      ...tweet,
      authedUser
    })
    .then((tweet) => dispatch(addTweet(tweet)))
    .then(() => hideLoading())
  }
}