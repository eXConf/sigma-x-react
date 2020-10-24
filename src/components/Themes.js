import React from 'react'
import { connect } from 'react-redux'
import { setTheme, setUserColor } from '../actions'
import { ChromePicker } from 'react-color'

class Themes extends React.Component {
  state = {activeColorPickerNum: 0}
  
  render() {
    return(
      <div className="secondary-container">
        <h2>Темы оформления</h2>
        <div className="themes">
          {this.renderThemes()}
          <div className="user-theme-text">
            Ниже вы можете задать цвета пользовательской темы (кликните по цвету, который хотите поменять, затем выберите новый в палитре ниже):
          </div>
          <div className="user-colors">
            {this.renderUserThemeControl()}
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
              {this.renderColorPicker()}
          </div>
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

  renderUserThemeControl = () => {
    const colors = this.props.themes[0].colors
    return (
      [...Array(colors.length)].map((el, index) => {
        return (
          <div 
            key={index} 
            className="user-color" 
            style={{backgroundColor: colors[index]}}
            onClick={() => {
              if (this.state.activeColorPickerNum !== index) {
                this.setState({activeColorPickerNum: index})
              } else {
                this.setState({activeColorPickerNum: -1})
              }
            }}
          >
          </div>
        )
      })
    )
  }

  renderColorPicker = () => {
    const index = this.state.activeColorPickerNum
    if (index !== -1) {
      return (
        <div>
          <ChromePicker 
            color={this.props.themes[0].colors[index]}
            onChangeComplete={(e) => this.props.setUserColor({index, color: e.hex})}
          />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    activeTheme: state.settings.activeTheme,
    themes: state.settings.themes
  }
}

export default connect(mapStateToProps, {setTheme, setUserColor})(Themes)