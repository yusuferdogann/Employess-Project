import React, { Component } from 'react'
import Navbar from "./components/navbar";
import Users from "./components/users";
import Giris from "./components/login"
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./components/welcome"
import './App.css'



const App = () => {

  const deleteUser = (id) => {
    this.setState({
      users: this.state.users.filter((user) => id !== user.id),
    });
  };


  return (
    <Router>
      <div className="container">
        <Navbar/>

        <hr/>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/login" component={Giris} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/update/:id" component={UpdateUser} />
      </div>
    </Router>
  );

}

export default App
