import React from 'react'
import { connect } from 'react-redux'
import { setPlayerName } from '../actions'

class PlayerControl extends React.Component {
  componentDidMount() {
    this.props.setPlayerName({ name: 'Serg', id: 0 })
    // console.log(this.props)
  }

  render() {
    console.log(this.props)
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

const mapStateToProps = (state) => {
  return {...state}
}

export default connect(mapStateToProps, { setPlayerName })(PlayerControl)