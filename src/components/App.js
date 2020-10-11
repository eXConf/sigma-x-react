import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'
import { connect } from 'react-redux'

import Menu from './Menu'
import Game from './Game'
import NewGame from './NewGame'
import SubjectsList from './SubjectsList'
import Graph from './Graph'

class App extends React.Component {
  
  state = {menuEnabled: true, width: 700}
  componentDidMount() {
    const width = document.body.offsetWidth
    this.setState({menuEnabled: true})
    this.setGameWidth(width)
    document.body.addEventListener('resize', this.onPageResize)
  }

  onPageResize = () => {
    this.setState({width: document.body.offsetWidth})
  }

  setGameWidth = (width) => {
    const numOfPlayers = this.props.players.length
    let gameWidth, playerScoreWidth
    if (width < numOfPlayers * 130) {
      gameWidth = width
      playerScoreWidth = width / numOfPlayers
    } else {
      width = numOfPlayers * 130
      playerScoreWidth = 130
    }
    document.documentElement.style.setProperty('--game-width', `${gameWidth}px`)
    document.documentElement.style.setProperty('--player-score-width', `${playerScoreWidth}px`)
  }

  switchMenuState = () => {
    this.setState({menuEnabled: !this.state.menuEnabled})
  }

  renderMenuSwitcher = () => {
    if (!this.state.menuEnabled) {
      return (
        <div 
         className="menu-switcher"
         onClick={() => {
           this.switchMenuState()
         }}
        >
          <i className="fas fa-chevron-right"></i>
        </div>
      )
    }
  }

  render(){
    return (
      <div className="container">
        <Router history={history}>
          {this.state.menuEnabled === true ? 
          <div className="menu-container">
            <Menu switchMenuState={this.switchMenuState} />
          </div> : this.renderMenuSwitcher()}
          <Switch>
            <Route path="/" exact>
              <Game 
                switchMenuState={this.switchMenuState}
                menuEnabled={this.state.menuEnabled} 
              />
            </Route>
            <Route path="/newgame">
              <NewGame />
            </Route>
            <Route path="/subjects">
              <SubjectsList />
            </Route>
            <Route path="/graph">
              <Graph />
            </Route>
            <Route path="/theme">
              
            </Route>
            <Route path="/about">
              
            </Route>
          </Switch>
        </Router>
      </div>
    )
  } 
}

const mapStateToProps = (state) => {
  return {
    players: state.game.players
  }
}

export default connect(mapStateToProps, {})(App)