import React from 'react'
import Menu from './Menu'
import Game from './Game'

const App = () => {
  return (
    <div className="container">
      <div className="menu-container">
        <Menu />
      </div>
      <Game />
    </div>
  )
}

export default App