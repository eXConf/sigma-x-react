import React from 'react'
import { connect } from 'react-redux'
import { setPlayerName } from '../actions'

class PlayerControl extends React.Component {
  state = {name: `Игрок ${this.props.playerID + 1}`}

  renderInput = () => {
    return (
      <input 
          className="player-name" 
          size="10"
          type="text"
          value={this.state.name}
          onChange={(e) => {
            e.preventDefault()
            this.setState({name: e.target.value})
            this.props.setPlayerName(
              {name: e.target.value, id: this.props.playerID}
            )
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.target.blur()
            }
          }}
        />
    )
  }

  render() {
    return (
      <div className="player-control">
        <div className="player-button plus">
          <i className="fas fa-plus-square"></i>
        </div>
        {this.renderInput()}
        <div className="player-button minus">
          <i className="fas fa-minus-square"></i>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    players: state.game.players
  })
}

export default connect(mapStateToProps, { setPlayerName })(PlayerControl)