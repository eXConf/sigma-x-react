import React from 'react'

class PlayerControl extends React.Component {

  render() {
    return (
      <div className="player-control">
        <div className="player-button plus">
          <i className="fas fa-plus-square"></i>
          </div>
        <input 
          className="player-name" 
          placeholder="PlayerName" 
          size="10"
        />
        <div className="player-button minus">
          <i className="fas fa-minus-square"></i>
          </div>
      </div>
    )
  }
}

export default PlayerControl