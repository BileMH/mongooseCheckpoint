import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";
import {useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { login } from "../../Js/Actions/user";


const Login = () => {
    const [user, setUser] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlechange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value})
    }
    const handleUser = (e) => {
        e.preventDefault();
        dispatch(login(user))
        navigate('/profile')
        
    }
    return (
        <div className='loogin'>
            <h1>login user</h1>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={handlechange}/>
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="Enter password" name="password" onChange={handlechange}/>
            <Button className='btn-login'variant="primary" type="submit" onClick={handleUser}> login </Button>
        </div>
    )
}
export default Login 