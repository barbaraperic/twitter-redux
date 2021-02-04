import React from 'react'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none'}}>
      <li style={{ marginRight: '32px'}}>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/new">New Tweet</Link>
      </li>
    </ul>
  )
}

export default Nav