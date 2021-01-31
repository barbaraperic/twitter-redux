import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import Feed from './Feed'

export default function App () {

  const state = useSelector(state => state)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(handleInitialData())
  },[dispatch])

  console.log('state', state)

  return (
    <div className='container'>
      <Feed />
    </div>
  )
}
