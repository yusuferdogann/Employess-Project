// import React, { Component } from "react";
// import axios from "axios"
// import {Link} from "react-router-dom"
// import UserConsumer from "../context"

// class user extends Component {

//   state = {
//     isVisible: false,
//   };

//   degistir=(e)=>{
//       this.setState({
//           isVisible: ! this.state.isVisible
//       })
//   }
//   silmeislemi = (dispatch,e) =>{
//       const {id} = this.props;

//     axios.delete(`http://localhost:3000/users/${id}`)

//       dispatch({type:"DELETE_USER",payload:id})
//   }

//   render() {
//     const { isVisible } = this.state;
//     const {id,name,department,salary} = this.props
//    return(
//        <UserConsumer>
//            {
//                value=>{
//                    const {dispatch} = value;
//                    return (
//                     <div className="col-md-8 mb-4">
//                       <div className="card">
//                         <div className="card-header d-flex justify-content-between">
//                           <h3  onClick={this.degistir} style={{ cursor: "pointer" }}>{name}</h3>
//                           <i onClick = {this.silmeislemi.bind(this,dispatch)} className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
//                         </div>

//                         {isVisible ? (
//                           <div className="card-body">
//                             <div className="card-text"> Department : {department}</div>
//                             <div className=" card-text">Salary : {salary} </div>
//                             <Link to={`update/${id}`}  className="btn btn-success w-100" type="submit" >Update User</Link>

//                           </div>
//                         ) : null}
//                       </div>
//                     </div>
//                   );
//                }
//            }
//        </UserConsumer>
//    )
//   }
// }
// export default user;

import React, { Component } from "react";
import axios from "axios"
import UserConsumer from "../context"
import {Link} from "react-router-dom"

class user extends Component {

  state = {
    isVisible : false,
  };

  gorunum=(e)=>{
      this.setState({
          isVisible: ! this.state.isVisible
})
  }
  deleteislemi = (dispatch) =>{
      const {id} = this.props


     axios.delete(`http://localhost:3000/users/${id}`)
      dispatch({type:"DELETE_USER",payload:id})
  }

  render() {
    const { id,name, department, salary } = this.props;
    const {isVisible} = this.state

  return(
    <UserConsumer>
      {
        value=>{
          const {dispatch} = value;
          return (
            <div className="col-md-8">
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <h3 onClick= {this.gorunum}  style={{ cursor: "pointer" }}>{name}</h3>
                  <i  onClick= {this.deleteislemi.bind(this,dispatch)} className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
      
                </div>
               { isVisible ?<div className="card-body">
                  <p className="card-text">department : {department}</p>
                  <p className="card-text">salary : {salary}</p>
                  <Link to={`/update/${id}`} className="btn btn-primary w-100" >Update User</Link>
      
                </div> : null}
      
              </div>
            </div>
          );
        }
      }
    </UserConsumer>
  )


   
  }
}
export default user;
