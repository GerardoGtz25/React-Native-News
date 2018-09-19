function login(state = {}, action){
  switch(action.type){
    case 'SET_SESSION': {
      return {...state, ...action.payload}
    }
    default:
      return state
  }
}

export default login;
