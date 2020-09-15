import React from 'react'

class NavigationBlock extends React.Component {

  render() {
    return (
      <tr>
        <td colSpan="5">
          <div className="navigation-block">
            <button className="nav-prev">&lt;&lt;</button>
            <button className="nav-current">2.4</button>
            <button className="nav-next">&gt;&gt;</button>
          </div>
        </td>
      </tr>
    )
  }
}

export default NavigationBlock