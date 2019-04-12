import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Login.css';

class Login extends Component {
  state = {
    username: '',
    password: '',
    error: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.props;
    if (username === this.state.username && password === this.state.password) {
      this.setState({ error: '' });
      this.props.history.push(`/dashboard`);
    } else {
      this.setState({
        error: 'Username Or Password that you have entered is incorrect'
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Login</h5>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                  <div className="form-label-group">
                    <input
                      onChange={this.handleChange}
                      type="email"
                      name="username"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Username"
                      required
                      autoFocus
                    />
                    <label htmlFor="inputEmail">Username</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      onChange={this.handleChange}
                      name="password"
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>

                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Login
                  </button>
                  {this.state.error !== '' && (
                    <div className="alert alert-danger mt-3">
                      {this.state.error}
                    </div>
                  )}

                  <hr className="my-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.login;
};

export default connect(mapStateToProps)(Login);
