import React from 'react'
import Input from '../../../components/reusables/Input'
import Button from '../../../components/reusables/Button'

const Register = () => {
    const data = {
        username: '', 
        email: '',
        password: '', 
        confirmpassword: ''
    }
    const setdata = (key, value)=> {
        data[key] = value
    }
    const displaydata =()=> {
        console.log(data)
    }
    return (
        <div>
            <form>
                <Input label='username' dataKey='username' setData={setdata}  icon='person'/>
                <Input label='email' dataKey='email' setData={setdata} icon='email' />
                <Input label='password' dataKey='password' setData={setdata} icon='lock' />
                <Input label='confirm password' dataKey='confirmpassword' setData={setdata} icon='lock' />
            </form>
            <Button color='gray' text='Register' width='120px' action={displaydata}/>
        </div>
    )
}
export default Register
