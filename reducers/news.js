function news(state = {}, action) {
  switch (action.type) {
    case 'SET_NEWS_LIST': {
      return {...state, ...action.payload}
    }
    case 'SET_WEBVIEW': {
      return {...state, ...action.payload}
    }
    default:
      return state
  }
}

export default news;
