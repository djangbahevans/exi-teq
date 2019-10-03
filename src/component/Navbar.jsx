import React from "react";
// import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

export default () => {
    return (
        <div>
            <Navbar style={{backgroundColor:"transparent"}} variant="dark">
            <Navbar.Brand href="#">Home</Navbar.Brand>
            <Navbar.Brand href="#">Service</Navbar.Brand>
            <Navbar.Brand href="#">About</Navbar.Brand>
            <Navbar.Brand href="#">Contact</Navbar.Brand>
            <Button
              className="mr-4 ml-auto text-light"
              variant="outline-primary"
            >
              Sign Up
            </Button>
            <Button className="text-light" variant="outline-primary">
              Login
            </Button>
          </Navbar>
        </div>
    );
};