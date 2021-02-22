import React from 'react';
import { Link } from 'react-router-dom'

class Register extends React.Component {
  render() {
    return(
      <>
        <h3>Register</h3>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Age:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="text" />
        </label>
        <button type="button">Register</button>
        <Link to="/registered-customers">Registered Customers</Link>
      </>
    )
  }
}

export default Register;