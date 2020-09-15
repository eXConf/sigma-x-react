import React from 'react'

class SummaryBlock extends React.Component {

  render() {
    return (
     <React.Fragment>
        <tr>
          <td colSpan="5" className="divider"></td>
        </tr>
        <tr>
          <td className="sigma">Σ</td>
          <td className="player-sum">130</td>
          <td className="player-sum">40</td>
          <td className="player-sum">-50</td>
          <td className="player-sum">180</td>
        </tr> 
     </React.Fragment>
    )
  }
}

export default SummaryBlock