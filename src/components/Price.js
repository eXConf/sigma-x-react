import React from 'react'

class Price extends React.Component {

  render() {
    return (
      <td className="price">
        {this.props.price}
      </td>
    )
  }
}

export default Price