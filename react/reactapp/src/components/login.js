import React,{useState} from 'react'
import {Redirect} from "react-router-dom"
import {useHistory} from "react-router-dom"


const Login = () => {
    const adminUser= {
        email:"admin@admin.com",
        password:"123",
      }

    const [details,setDetails]=useState({name:"",password:""});
    const [user,setUser] = useState({name:"",email:""});
    const [error,setError]= useState("")
    const history = useHistory()


    const Login = details=>{
   
        if(details.email== adminUser.email&&details.password==adminUser.password){
          console.log("log in")
          setUser({
            name:details.name,
            email:details.email
          })
          
        }else{
        //   console.log("nom")
          setError("tekrar deneyin")
    
        }
      }

        const Logout = () =>{
    console.log("Logout")
        setUser({name:"",email:"",password:""})
        history.push("")
  }
    
        <Redirect to="/"/>

    const submitHandler = e =>{
        e.preventDefault();
        Login(details);
    }
    const AddUser=()=>{
        history.push("/users")
    }
    return (
        <div>
            <form onSubmit={submitHandler}  >
               {(user.email!= "")?(
                <div>
                       <h2>welcome {user.name}</h2>
                   <button className="btn btn-primary mt-5" onClick={()=>Logout()}>Logout</button>
                <button className="btn btn-dark ms-3 mt-5" onClick={()=>AddUser()}>AddUser</button>

                </div>
               ):(
               <div className="form-group">
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input className="form-control" type="text" name="name" id="name" onChange={e=>setDetails({...details,name:e.target.value})} value={details.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input className="form-control" type="text" name="email" id="email" onChange={e=>setDetails({...details,email:e.target.value})} value={details.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input className="form-control" type="password" name="password" id="password" onChange={e=>setDetails({...details,password:e.target.value})} value={details.password}/>
                </div>
                <button className="btn btn-primary" type="submit" className="btn btn-primary">Login</button>
                </div>
               )
               }
            </form>
        </div>

    )
}

export default Login


