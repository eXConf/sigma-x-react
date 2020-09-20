import React from 'react'
import { connect } from 'react-redux'
import { setCurrentQuestionNum } from '../actions'

class NavigationBlock extends React.Component {

  onNextClicked = () => {
    this.props.setCurrentQuestionNum(this.props.currentQuestionNum + 1)
  }

  onPrevClicked = () => {
    if (this.props.currentQuestionNum === 0) {
      return
    }
    this.props.setCurrentQuestionNum(this.props.currentQuestionNum - 1)
  }

  render() {
    return (
      <tr>
        <td colSpan="5">
          <div className="navigation-block">
            <button 
              onClick={() => this.onPrevClicked()} 
              className="nav-prev"
            ><i className="fas fa-chevron-left"></i></button>
            <button className="nav-current">2.4</button>
            <button 
              onClick={() => this.onNextClicked()} 
              className="nav-next"
            ><i className="fas fa-chevron-right"></i></button>
          </div>
        </td>
      </tr>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    currentQuestionNum: state.game.currentQuestionNum,
  })
}

export default connect(mapStateToProps, {setCurrentQuestionNum})(NavigationBlock)