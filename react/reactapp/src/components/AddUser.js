// import React, { Component } from "react";
// import uniqid from "uniqid";
// import axios from "axios";
// import UserConsumer from "../context";

// class AddUser extends Component {
//   state = {
//     name: "",
//     department: "",
//     salary: "",
//   };

//   changeinput = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   AddUser = async (dispatch, e) => {
//     e.preventDefault();

//     const { name, department, salary } = this.state;

//     const newuser = {
//       id: uniqid(),
//       name,
//       department,
//       salary,
//     };

//     const response = await axios.post("http://localhost:3000/users", newuser);

//     dispatch({ type: "ADD_USER", payload: response.data });
//     this.props.history.push("/");
//   };

//   render() {
//     const { name, department, salary } = this.state;
//     return (
//       <UserConsumer>
//         {(value) => {
//           const { dispatch } = value;

//           return (
//             <div className="col-md-8 mb-4">
//               <div className="card">
//                 <div className="card-header">
//                   <h4>Add User</h4>
//                 </div>

//                 <form onSubmit={this.AddUser.bind(this, )}>
//                   <div className="form-group">
//                     <label htmlFor="name">Name</label>
//                     <input
//                       type="text"
//                       name="name"
//                       id="id"
//                       placeholder="Enter Name"
//                       className="form-control"

//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="name">Department</label>
//                     <input
//                       type="text"
//                       name="department"
//                       id="id"
//                       placeholder="Enter Department"
//                       className="form-control"

//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="name">Salary</label>
//                     <input
//                       type="text"
//                       name="salary"
//                       id="id"
//                       placeholder="Enter Salary"
//                       className="form-control"

//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="btn btn-danger btn-lg w-100 "
//                   >
//                     Add User
//                   </button>
//                 </form>
//               </div>
//             </div>
//           );
//         }}
//       </UserConsumer>
//     );
//   }
// }
// export default AddUser;

import React, { Component } from "react";
import axios from "axios";
import uniqid from "uniqid";
import UserConsumer from "../context";

class AddUser extends Component {
  state = {
    name: "",
    department: "",
    salary: "",
  };
  changeinput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  AddUser = async (dispatch, e) => {
    e.preventDefault();
    const { name, department, salary } = this.state;

    const newuser = {
        id : uniqid(),
      name,
      department,
      salary
    };

    const response = await axios.post("http://localhost:3000/users", newuser);

    dispatch({ type: "ADD_USER", payload: response.data });
    this.props.history.push("/users");

  };


  render() {
    const { name, department, salary } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-8 mb-4">
              <div className="card">
                <div className="card-header">
                  <h4>Add User</h4>
                </div>

                <form onSubmit={this.AddUser.bind(this,dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="id"
                      placeholder="Enter Name"
                      className="form-control"
                      value={name}
                      onChange={this.changeinput}
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
                      value={department}
                      onChange={this.changeinput}
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
                      value={salary}
                      onChange={this.changeinput}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-danger btn-lg w-100 "
                  >
                    Add User
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default AddUser;
