import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'

import Menu from './Menu'
import Game from './Game'

class App extends React.Component {
  
  state = {menuEnabled: true}
  componentDidMount() {
    this.setState({menuEnabled: false})
  }

  switchMenuState = () => {
    this.setState({menuEnabled: !this.state.menuEnabled})
  }
  render(){
    return (
      <div className="container">
        <Router history={history}>
          {this.state.menuEnabled === true ? 
          <div className="menu-container">
            <Menu switchMenuState={this.switchMenuState} />
          </div> : null}
          <Route path="/" exact>
            <Game 
              switchMenuState={this.switchMenuState}
              menuEnabled={this.state.menuEnabled} 
            />
          </Route>
          <Route path="/newgame">

          </Route>
          <Route path="/subjects">

          </Route>
          <Route path="/graph">
            
          </Route>
          <Route path="/theme">
            
          </Route>
          <Route path="/about">
            
          </Route>
        </Router>
      </div>
    )
  } 
}

export default App