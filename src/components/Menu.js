import React from 'react'
import MenuItem from './MenuItem'

class Menu extends React.Component {

  render() {
    return (
      <div className="menu">
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    )
  }
}

export default Menu