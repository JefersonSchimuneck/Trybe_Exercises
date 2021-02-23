import React from 'react';

import { Link } from 'react-router-dom'

import { connect } from 'react-redux';

import { registerCustomer } from '../actions';

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      age: '',
      email: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleClick = () => {
    const { registerCustomer } = this.props;
    const { name, age, email } = this.state;
    registerCustomer({name: name, age: age, email: email })
  }

  renderRegistrationForms() {
    const { name, age, email } = this.state;

    return (
      <>
      <label>
        Name:
        <input name ="name" onChange={ this.handleChange } type="text" value= { name }/>
      </label>
      <label>
        Age:
        <input name ="age" onChange={ this.handleChange } type="text" value= { age } />
      </label>
      <label>
        Email:
        <input name ="email" onChange={ this.handleChange } type="text" value= { email } />
      </label>
      <button onClick = {() => this.handleClick() } type="button">Register</button>
      <Link to="/registered-customers">Registered Customers</Link>
    </>
    )
  }

  render() {
    const { loginState } = this.props;

    return(
      <>
        <h3>Register</h3>
        { !loginState ?
          <p>Login não efetuado</p> :
          this.renderRegistrationForms() }
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  loginState: state.loginReducer.login,
});

const mapDispatchToProps = (dispatch) => ({
  registerCustomer: (newCustomer) => dispatch(registerCustomer(newCustomer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);