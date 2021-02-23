import React from 'react';

import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      redirect: false,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleClick = () => {
    const { email, password } = this.state;
    this.setState({
      redirect: !email || !password ? false : true,
    })
    
  }

  render() {
    const { email, password, redirect } = this.state;

    if (redirect) {
      return <Redirect to="/registered-customers" />;
    }

    return(
      <>
        <h3>Login</h3>
        <label>
          Email:
          <input name ="email" onChange={ this.handleChange } type="text" value={ email } />
        </label>
        <label>
          Password:
          <input name ="password" onChange={ this.handleChange } type="password" value={ password } />
        </label>
        <button onClick = {() => this.handleClick() }type="button">Login</button>
      </>
    )
  }
}

export default Login;