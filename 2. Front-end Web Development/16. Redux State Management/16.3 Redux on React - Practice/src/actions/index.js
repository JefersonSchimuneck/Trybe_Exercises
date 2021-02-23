export const REGISTER_CUSTOMER = 'REGISTER_CUSTOMER';
export const LOGIN = 'LOGIN';

export const registerCustomer = (newCustomer) => ({
  type: REGISTER_CUSTOMER,
  payload: {
    newCustomer,
  }
});

export const login = () => ({
  type: LOGIN,
})