import React, { Component } from 'react';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstname: '',
    lastname: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form className="section grey-text" onSubmit={this.handleSubmit}>

          <h5>Sign Up</h5>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="firstname">Firstname</label>
            <input type="text" id="firstname" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="lastname">Lastname</label>
            <input type="text" id="lastname" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <input type="submit" className="btn" value="Sign Up" />
          </div>

        </form>
      </div>
    );
  }
};

export default SignUp;
