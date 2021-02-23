import { LOGIN } from '../actions'

const INITIAL_STATE = {
  login: false,
}

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: !state.login,
      };
    default:
      return state;
  }
}

export default loginReducer;