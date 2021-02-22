import React from 'react';

class Login extends React.Component {
  render() {
    return(
      <>
        <h3>Login</h3>
        <label>
          Email:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
      </>
    )
  }
}

export default Login;