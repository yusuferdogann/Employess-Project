import React, { Component } from 'react'
import User from "./user"
import UserProvider from "../context"
import {useHistory} from "react-router-dom"

const Users = () => {

    const history = useHistory();

        const Add = ()=>{
            history.push("/add")

        }
    return (
        <UserProvider>
               {
                   value =>{
                       const {users} = value;
                       return (
                        <div>
                            {
                                users.map(user=>{
                                    return(
                                        <User
                                        key = {user.id}
                                        id = {user.id}
                                        name = {user.name}
                                        department = {user.department}
                                        salary = {user.salary}
                                        />
                                    )
                                })
                            }      
                <button className="btn btn-dark ms-3 mt-5" onClick={()=>Add()}>AddUser</button>
              
                        </div>
                    )
                   }
               }
           </UserProvider>
               
    )
}

export default Users;
