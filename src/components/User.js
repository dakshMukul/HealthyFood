import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);

    const { name, location } = this.props;
    // State initialization
    this.state = {
      count: 0,
      name,
      location,
    };
  }

  render() {
    return (
      <div>
        <h1>Count: </h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
      </div>
    );
  }
}

export default User;
