import * as React from 'react'
import { useSelector } from 'react-redux'

export default function App () {

  const state = useSelector(state => state)

  console.log('state', state)

  return (
    <div className='container'>
      Redux Course Curriculum
    </div>
  )
}
