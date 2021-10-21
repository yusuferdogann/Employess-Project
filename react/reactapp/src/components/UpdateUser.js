import React, { Component } from "react";
import axios from "axios";
import UserConsumer from "../context"

class UpdateUser extends Component {

    state = {
        name: "",
        department : "",
        salary : ""
    }

  componentDidMount = async () => {
    const { id } = this.props.match.params;
    const response = await axios.get(`http://localhost:3000/users/${id}`);
    const { name, department, salary } = response.data;

    this.setState({
      name,
      department,
      salary,
    });
  };
  UpdatedUser = async(dispatch,e) =>{

    e.preventDefault();

    const {name,department,salary} = this.state;
    const { id } = this.props.match.params;

    const updateuser = {
        name,
        department,
        salary
    }
    const response = await axios.put(`http://localhost:3000/users/${id}`,updateuser)


    this.setState({
      name,
      department,
      salary

      
    });

    dispatch({type:"UPDATE_USER",payload:response.data})
    this.props.history.push("/users");
 
}

  changeinput = (e) =>{
    this.setState({
        [e.target.name] : e.target.value
    })
  }

  render() {
      const {name,department,salary} = this.state
   return(
       <UserConsumer>
           {value =>{
               const {dispatch} = value;
               return (
                <div className="col-md-8 mb-4">
                  <div className="card">
                    <div className="card-header">
                      <h4>Update User</h4>
                    </div>
          
                    <form onSubmit={this.UpdatedUser.bind(this,dispatch)}>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          name="name"
                          id="id"
                          placeholder="Enter Name"
                          className="form-control"
                            onChange={this.changeinput}
                            value={name}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="name">Department</label>
                        <input
                          type="text"
                          name="department"
                          id="id"
                          placeholder="Enter Department"
                          className="form-control"
                            onChange={this.changeinput}
                            value={department}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="name">Salary</label>
                        <input
                          type="text"
                          name="salary"
                          id="id"
                          placeholder="Enter Salary"
                          className="form-control"
                            onChange={this.changeinput}
                            value={salary}
                        />
                      </div>
                      <button type="submit" className="btn btn-danger btn-lg w-100 ">
                        Update User
                      </button>
                    </form>
                  </div>
                </div>
              );
           }}
       </UserConsumer>
   )
  }
}
export default UpdateUser;
