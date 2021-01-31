import { 
  RECEIVE_TWEETS, 
  ADD_TWEET, 
  TOGGLE_LIKE 
} from '../actions/tweets'

export const tweets = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TWEETS : 
      return {
        ...state,
        ...action.tweets
      }
    case ADD_TWEET :
      return {
        ...state,
        [action.tweet.id]: action.tweet
      }
    case TOGGLE_LIKE :
      const { id, authedUser } = action
      return {
        ...state,
        [id]: {
          ...state[id],
          likes: action.hasLiked === true 
            ? state[id].likes.filter((uid) => uid !== authedUser)
            : state[id].likes.concat([authedUser])
        }
      }
    default:
      return state
  }
}