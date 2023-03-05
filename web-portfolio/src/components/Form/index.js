import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    userName: "",
    email: "",
    message: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const {name, value} = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    // Alert the user for submitting the form successfully.
    alert(`Thank you ${this.state.userName} for your enquiry, I will get in touch with you soon on ${this.state.email}`);
    this.setState({
      userName: "",
      email: "",
      message: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.userName} {this.state.email}
        </p>
        <form className="form">
          <input
            value={this.state.userName}
            name="userName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Name"
          />
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="Email id"
          />
          <textarea
            value={this.state.message}
            name="message"
            onChange={this.handleInputChange}
            cols="50"
            rows="10"
            placeholder="Enter your message..."
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
