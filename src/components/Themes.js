import React from 'react'
import { connect } from 'react-redux'
import { setTheme } from '../actions'

class Themes extends React.Component {
  render() {
    return(
      <div className="secondary-container">
        <h2>Темы оформления</h2>
        <div className="themes">
          {this.renderThemes()}
        </div>
      </div>
    )
  }

  renderThemes = () => {
    const { themes, activeTheme } = this.props
    return themes.map((theme, index) => {
      const isActive = index === activeTheme ? 'active' : ''
      const isCurrent = index === activeTheme ? '(текущая)' : ''
      const { colors } = theme
      return (
        <div 
          className={`theme ${isActive}`} 
          key={theme.name}
          onClick={() => this.props.setTheme(index)}
        >
          <div className="theme-name">
            {`${theme.name} ${isCurrent}`}
          </div>
          <div 
            className="theme-colors"
            style={{
              // backgroundColor: 'red'
              background: `linear-gradient(to right, ${colors[0]} 12.5%, 12.5%, ${colors[1]} 25%, 25%, ${colors[2]} 37.5%, 37.5%, ${colors[3]} 50%, 50%, ${colors[4]} 62.5%, 62.5%, ${colors[5]} 75%, 75%, ${colors[6]} 87.5%, 87.5%, ${colors[7]})`
            }}
          >
          </div>
        </div>
      )
    })
  }
}

const mapStateToProps = (state) => {
  return {
    activeTheme: state.settings.activeTheme,
    themes: state.settings.themes
  }
}

export default connect(mapStateToProps, {setTheme})(Themes)