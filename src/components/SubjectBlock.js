import React from 'react'
import Subject from './Subject'
import Question from './Question'

class SubjectBlock extends React.Component {

  render() {
    return (
      // <div>
      //   <table>
      //     <th>SubjectName</th>
      //     <tr>
      //       <td>Price</td>
      //       <td>10</td>
      //       <td>10</td>
      //       <td>10</td>
      //       <td>10</td>
      //     </tr>
      //   </table>
      // </div>
      
      
      
      <div>
        <Subject />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    )
  }
}

export default SubjectBlock