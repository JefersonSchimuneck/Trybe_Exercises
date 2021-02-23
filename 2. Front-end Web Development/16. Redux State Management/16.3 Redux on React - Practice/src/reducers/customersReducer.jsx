import { REGISTER_CUSTOMER } from '../actions'

const INITIAL_STATE = {
  registeredCustomers: [],
}

const customersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_CUSTOMER :
      return {
        ...state,
        registeredCustomers: state.registeredCustomers.concat(action.payload.newCustomer),
      };
    default:
      return state;
  }
}

export default customersReducer;