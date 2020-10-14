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
        <NavLink 
          to="/subjects" 
          className="menu-item" 
          activeClassName="menu-active"
        >
          <div>Темы и вопросы</div>
        </NavLink>
        <NavLink 
          to="/graph" 
          className="menu-item" 
          activeClassName="menu-active"
        >
          <div>График</div>
        </NavLink>
        <NavLink 
          to="/theme" 
          className="menu-item" 
          activeClassName="menu-active"
        >
          <div>Цвета</div>
        </NavLink>
        <NavLink 
          to="/about" 
          className="menu-item" 
          activeClassName="menu-active"
        >
          <div>?</div>
        </NavLink>
      </div>
    )
  }
}

export default Menu