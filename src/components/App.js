import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'

import Menu from './Menu'
import Game from './Game'
import NewGame from './NewGame'

class App extends React.Component {
  
  state = {menuEnabled: true}
  componentDidMount() {
    this.setState({menuEnabled: true})
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

            </Route>
            <Route path="/graph">
              
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

export default App