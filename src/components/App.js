import React from 'react'
import Menu from './Menu'
import Game from './Game'

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
        {this.state.menuEnabled === true ? 
        <div className="menu-container">
          <Menu />
        </div> : null}
        <Game 
          switchMenuState={this.switchMenuState} 
        />
      </div>
    )
  } 
}

export default App