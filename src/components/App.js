import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Dashboard from './Dashboard'
import Nav from './Nav'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'

export default function App () {

  const state = useSelector(state => state)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(handleInitialData())
  },[dispatch])

  console.log('state', state)

  return (
    <Router>
    <div className='container'>
      <Nav />
    </div>
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/tweet/:id">
        <TweetPage />
      </Route>
      <Route path="/new">
        <NewTweet />
      </Route>
    </Switch>
    </Router>
  )
}
