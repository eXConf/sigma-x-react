import React from 'react'
import { Link } from 'react-router-dom'

class MenuItem extends React.Component {

  render() {
    return (
      <div>
        <Link to="/newgame">New</Link>
      </div>
    )
  }
}

export default MenuItem