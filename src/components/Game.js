import React from 'react'
import SubjectBlock from './SubjectBlock'
import SummaryBlock from './SummaryBlock'
import ControlsBlock from './ControlsBlock'
import NavigationBlock from './NavigationBlock'
import PackageBlock from './PackageBlock'

class Game extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-container">
        <div className="scrollable">
          <table className="scores-block">
            <tbody>
              <SubjectBlock />
              <SubjectBlock />
              <SubjectBlock />
              <SubjectBlock />
            </tbody>
          </table>
        </div>
        <table className="scores-block">
          <tbody>
            <SummaryBlock />
            <ControlsBlock />
            <NavigationBlock />
            <PackageBlock />
          </tbody>
        </table>
      </div>
      </React.Fragment>
    )
  } 
}

export default Game