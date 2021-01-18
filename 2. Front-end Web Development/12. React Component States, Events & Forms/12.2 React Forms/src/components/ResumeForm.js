import React from 'react';

class ResumeForm extends React.Component {
  constructor () {
    super()

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address:'',
      city: '',
      state: '',
      type: '',
      about: '',
      position: '',
      description: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }


  render() {
    const { 
    name,
    email,
    cpf,
    address,
    city,
    state,
    type,
    about,
    position,
    description
    } = this.state;
    return (
      <div>
        <h1>Resume Registration</h1>
        <form>
          <label>
            Name
            <input name="name" type="text" value={name} onChange={this.handleChange} />
          </label>

          <label>
            Email
            <input name="email" type="email" value={email} onChange={this.handleChange} />
          </label>

          <label>
            CPF
            <input name="cpf" type="text" value={cpf} onChange={this.handleChange} />
          </label>

          <label>
            Adress
            <input name="adress" type="text" value={address} onChange={this.handleChange} />
          </label>

          <label>
            City
            <input name="city" type="text" value={city} onChange={this.handleChange} />
          </label>

          <label>
            State
            <input name="state" type="text" value={state} onChange={this.handleChange} />
          </label>

          <label>
            Type
            <input name="type" type="text" value={type} onChange={this.handleChange} />
          </label>

          <label>
            About
            <input name="about" type="text" value={about} onChange={this.handleChange} />
          </label>

          <label>
            Position
            <input name="position" type="text" value={position} onChange={this.handleChange} />
          </label>

          <label>
            Description
            <input name="description" type="text" value={description} onChange={this.handleChange} />
          </label>
        </form>
      </div>
    )
  }
}

export default ResumeForm;