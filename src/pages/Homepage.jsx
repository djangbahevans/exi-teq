import React, { Component } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

class HomePage extends Component {
  state = {}
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header style={{ backgroundColor: "#201055", height: "400px" }}>
          <Navbar />
        </header>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
