import React from 'react'
import MenuItem from './MenuItem'

class Menu extends React.Component {

  render() {
    return (
      <div className="menu">
        <button 
          className="hide-menu-btn"
          onClick={() => {
            this.props.switchMenuState()
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    )
  }
}

export default Menu