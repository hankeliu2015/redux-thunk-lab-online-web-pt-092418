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

//Hacker news testing:
import React, { Component } from 'react'

class CatList extends Component {
  render () {
    const list = this.props.catPics.map((cat, index) => <li  key={index}> {cat.title} </li> )
    return (
      <div>{list}</div>
    )
  }
}
export default CatList
