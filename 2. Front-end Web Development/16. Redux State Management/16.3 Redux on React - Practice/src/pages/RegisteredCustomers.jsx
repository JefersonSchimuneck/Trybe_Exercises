import React from 'react';
import { Link } from 'react-router-dom'

class RegisteredCustomers extends React.Component {
  render() {
    return(
      <>
        <h3>Registered Customers</h3>
        <Link to="/register">Register</Link>
      </>
    )
  }
}

export default RegisteredCustomers;