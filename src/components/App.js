import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'
import { connect } from 'react-redux'
import { setUIGameWidth, loadStateFromLocalStorage } from '../actions'
import Menu from './Menu'
import Game from './Game'
import NewGame from './NewGame'
import SubjectsList from './SubjectsList'
import Graph from './Graph'
import About from './About'

class App extends React.Component {
  
  state = {menuEnabled: true}

  componentDidMount() {
    const width = document.body.offsetWidth
    this.setState({menuEnabled: true})
    this.props.setUIGameWidth(width)
    window.addEventListener('resize', this.onPageResize)
    this.props.loadStateFromLocalStorage()
  }

  onPageResize = () => {
    this.props.setUIGameWidth(document.body.offsetWidth)
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
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  } 
}

export default connect(null, {setUIGameWidth, loadStateFromLocalStorage})(App)