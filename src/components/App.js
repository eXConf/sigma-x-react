import React from 'react'
import Menu from './Menu'
import SubjectBlock from './SubjectBlock'
import SummaryBlock from './SummaryBlock'
import ControlsBlock from './ControlsBlock'
import NavigationBlock from './NavigationBlock'
import PackageBlock from './PackageBlock'

const App = () => {
  return (
    <div className="container">
      <div className="menu-container">
        <Menu />
      </div>
      <div className="main-container">
        <table className="scores-block">
          <tbody>
            <SubjectBlock />
            <SubjectBlock />
            <SummaryBlock />
            <ControlsBlock />
            <NavigationBlock />
          </tbody>
        </table>


        
        
        
        <PackageBlock />
      </div>
    </div>
  )
}

export default App