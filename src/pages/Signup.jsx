import React, { Component } from "react";

class SignupPage extends Component {
  state = {}

  render() {
    return (
      <div>
        <div className="links">
          <a href="#" className="link">Log In</a>
          <a href="#" className="link">Sign up</a>
        </div>
        <form>
          <input type="text" placeholder="Email address"/>
          <input type="text" placeholder="Password"/>
          <input type="text" placeholder="Confirm password"/>
          <input type="button" value="Sign in"/>
        </form>
        <a href="#" className="forgot-password">forgot password</a>
      </div>
    );
  }
}

export default SignupPage;
