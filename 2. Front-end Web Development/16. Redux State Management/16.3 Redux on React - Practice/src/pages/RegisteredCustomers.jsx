import React from 'react';

import { Link } from 'react-router-dom'

import { connect } from 'react-redux';

class RegisteredCustomers extends React.Component {
  renderCustomerList() {
    const { customersState } = this.props;

    return(
      customersState.length < 1 ?
        <p>Nenhum cliente cadastrado</p> :
        customersState.map((customer) =>
          <p key={ customer.email }>
            Name: { customer.name } Age: { customer.age } Email: { customer.email }
          </p>
      )
    )
  }

  render() {
    const { loginState } = this.props;
    
    return(
      <>
        <h3>Registered Customers</h3>
        { !loginState ?
          <p>Login não efetuado</p> :
          this.renderCustomerList()
        }
        <Link to="/register">Register</Link>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  loginState: state.loginReducer.login,
  customersState: state.customersReducer.registeredCustomers,
});

export default connect(mapStateToProps)(RegisteredCustomers);