export default (state={stories: {}, loading: false, pictures: []}, action) => {
  switch(action.type) {

    case 'LOADING_CATS':
      return {
          ...state,
          loading: true
        };
    case 'FETCH_CATS':
      return {loading: false, pictures: action.payload}

    case 'FETCH_STORY':
      return {loading:false, stories: {...state.stories}}

    default:
      return state;
  }
}
