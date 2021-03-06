import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Login_Logout.css";
import axios from "axios";

export class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
    };
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_URL}/logout`).then((response) => {
      this.setState({
        loggedIn: "false",
      });
      localStorage.removeItem("firstname");
      localStorage.removeItem("lastname");
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("id");
    });
  }

  render() {
    if (this.state.loggedIn === "false") {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { loggedIn: false },
          }}
        />
      );
    }
    return null;
  }
}

export default Logout;
