// import fetch from 'isomorphic-fetch'

// export function fetchCats() {
//   return (dispatch) => {
//     dispatch({type: 'LOADING_CATS'});
//     return (
//       fetch('http://localhost:4000/db')
//       .then(response => response.json())
//       .then(cats => dispatch({type: 'FETCH_CATS',payload: cats.images}))
//     )
//   }
// }

// // hacker news fetch testing for a single story:

// export function fetchCats() {
//   return (dispatch) => {
//     dispatch({type: 'LOADING_CATS'});
//     return (
//       fetch('https://hacker-news.firebaseio.com/v0/item/8265435.json?print=pretty')
//       .then(response => response.json())
//       .then(cats => dispatch({type: 'FETCH_CATS',payload: cats}))
//     )
//   }
// }

// // hacker news fetch testing for a list of story ids:

export function fetchCats() {
  return (dispatch) => {
    dispatch({type: 'LOADING_CATS'});
    return (
      fetch('https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty')
      .then(response => response.json())
      .then(storyIds => storyIds.map(loadStory))
        // dispatch({type: 'FETCH_CATS',payload: storyIds}))
    )
  }
}

function loadStory(id) {
  // debugger
  console.log(id)
  
  return (dispatch) => {
    dispatch({type: 'LOADING_STORY'});
    return (
      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      .then(response => response.json())
      .then(story => {
        console.log(story);
        dispatch({type: 'FETCH_STORY', payload: story})
      })
    )
  }
}
