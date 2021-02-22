import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export class Login extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      username: "",
      password: "",
      loggedIn,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    localStorage.setItem("token", "jwfywtiufvasidURSAIDAU");
    //login magic
    if (username === "A" && password === "B") {
      this.setState({
        loggedIn: true,
      });
    }
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <>
        <div className="main_login">
          <div className="login">
            <h2>User Login</h2>
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.onChange}
              />
              <br />

              <input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              <br />
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
