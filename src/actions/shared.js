import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { getInitialData } from '../utils/api'
import { receiveTweets } from './tweets'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUser'

export const SET_INITIAL_DATA = 'SET_INITIAL_DATA';

const AUTHED_USER = 'tylermcginnis'

export const handleInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading())

    getInitialData()
    .then(({ users, tweets}) => {
      dispatch(receiveUsers(users))
      dispatch(receiveTweets(tweets))
      dispatch(setAuthedUser(AUTHED_USER))
    })
    .then(() => dispatch(hideLoading()))
  }
}