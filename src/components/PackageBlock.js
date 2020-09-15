import React from 'react'

class PackageBlock extends React.Component {

  render() {
    return (
      <tr>
        <td colSpan="5">
          <textarea cols="50" rows="10" className="package">

          </textarea>
        </td>
      </tr>
    )
  }
}

export default PackageBlock