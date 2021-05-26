import React from 'react'
import Button from "../../../components/reusables/Button"
import Input from "../../../components/reusables/Input"
import {useEffect} from "react"

 const Login = () => {
    let data = {
        username: '',
        password: ''
    }
    const getData = (key, value)=> {
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
            <div className="loginContainer">
                <Input label="Username" getData={getData} dataKey="username" icon="email" />
                <Input label="Password" getData={getData} dataKey="password" icon="person" />   
            </div>

            <div className='loginBtn'>
                <Button color='black' text="login" width="100%" outline={false} action={logData} key="" />
            </div>
            <form>
            </form>
       </div>
     
    )
}
export default Login
