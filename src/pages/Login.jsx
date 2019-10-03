import React, { Component } from "react";
import "./Login.css"

class LoginPage extends Component {
  state = {}

  render() {
    return (
      <div class="login-container">
        <div className="links">
          <a href="./login" className="link">Log In</a>
          <a href="./signup" className="link">Sign up</a>
        </div>
        <form>
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm password" />
          <input type="button" value="Sign in" className="buttom button-submit" />
        </form>
        <a href="./forgotpassword" className="forgot-password">forgot password</a>
      </div>
    );
  }
}

export default LoginPage;
