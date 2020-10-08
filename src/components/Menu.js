import React from 'react'
import { NavLink } from 'react-router-dom'

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
        <NavLink 
          to="/" exact 
          className="menu-item" 
          activeClassName="menu-active"
        >
          <div>Игра</div>
        </NavLink>
        <NavLink 
          to="/newgame" 
          className="menu-item" 
          activeClassName="menu-active"
        >
          <div>Новая игра</div>
        </NavLink>
      </div>
    )
  }
}

export default Menu