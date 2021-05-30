import React from 'react'
import Button from "../../../components/reusables/Button"
import Input from "../../../components/reusables/Input"
import {useEffect} from "react"

 const Login = () => {
    let data = {
        username: '',
        password: ''
    }
    const setData = (key, value)=> {
        data[key] = value
    }

    const logData = ()=> {
        console.log(data)
    }
    
    useEffect(() => {
        console.log("Login: i mounted")
        return () => {
            console.log("Login: i unmounted")
        }
    }, [])

    return (
        <div>
            <h5>Welcome</h5>
            <form>
            <div className="loginContainer">
                <Input label="Username" getData={setData} dataKey="username" icon="email" />
                <Input label="Password" getData={setData} dataKey="password" icon="person" />   
            </div>
            </form>
            <div className='loginBtn'>
                <Button color='black' text="login" width="100%" outline={false} action={logData} key="" />
            </div>
          
      
       </div>
     
    )
}
export default Login
