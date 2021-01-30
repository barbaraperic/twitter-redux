import { RECEIVE_USERS } from '../actions/users'
import { ADD_TWEET } from '../actions/tweets'

export const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_TWEET :
      const { author, id } = action.tweet

      return {
        ...state,
        [author]: {
          ...[state.author],
          tweets: state[author].tweets.concat([id])
        }
      }
    default:
      return state
  }
}