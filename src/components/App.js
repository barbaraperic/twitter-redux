import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Dashboard from './Dashboard'
import Nav from './Nav'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'

export default function App () {

  const loading = useSelector(state => state.authedUser === null)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(handleInitialData())
  },[dispatch])

  return (
    <Router>
    <div className='container'>
      <Nav />
    </div>
    {loading === true 
    ? null 
    :
    <div>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/tweet/:id">
        <TweetPage />
      </Route>
      <Route path="/new">
        <NewTweet />
      </Route>
    </div>
    }
    </Router>
  )
}
