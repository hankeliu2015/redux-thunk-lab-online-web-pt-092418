// import React, { Component } from 'react'
//
// class CatList extends Component {
//   render () {
//     const list = this.props.catPics.map((cat, index) => <img  key={index} src={cat.url} height="20%" width="20%" alt="catImage" /> )
//     return (
//       <div>{list}</div>
//     )
//   }
// }
// export default CatList

//Hacker news testing for a single story:
// import React, { Component } from 'react'
//
// class CatList extends Component {
//  debugger
//
//   render () {
//     // const list = this.props.catPics.map((cat, index) => <li  key={index}> {cat.title} </li> )
//     return (
//       <div>
//         <li>Story ID: {this.props.catPics.id}</li>
//         <li>Title: {this.props.catPics.title}</li>
//         <li>URL: {this.props.catPics.url}</li>
//         <li>Score: {this.props.catPics.score}</li>
//
//       </div>
//     )
//   }
// }
// export default CatList

//Hacker news testing for a list of stories ids:
import React, { Component } from 'react'

class CatList extends Component {
 // debugger

  render () {
    const list = this.props.catPics.map((cat, index) => <li  key={index}> {cat.id}: {cat.title} </li> )
    return (
      <div>
        <h4>Show News Contents</h4>
        {list}
      </div>
    )
  }
}
export default CatList
