import React, { Component } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: "Ufuk Can Kumcu",
          email: "Ufkcnkmc@gmail.com",
        },
        {
          id: 2,
          name: "Umut Can Kumcu",
          email: "Umtcnkmc@gmail.com",
        },
      ],
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }
  addUser(newUser) {
    let updatedUsers = this.state.users;
    updatedUsers.push(newUser);
    this.setState({
      users:updatedUsers
    })
  }
  deleteUser(id) {
    let updatedUsers = this.state.users;
    updatedUsers = updatedUsers.filter((user) => user.id !== id);
    this.setState({
      users: updatedUsers,
    });
  }

  render() {
    return (
      <div className="container">
        <h4>User App</h4>
        <hr></hr>
        <AddUser addUser={this.addUser}/>
        <hr></hr>
        <Users deleteUser={this.deleteUser} users={this.state.users} />
      </div>
    );
  }
}
