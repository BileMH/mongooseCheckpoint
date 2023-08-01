
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../Js/Actions/user';
import { Button, Form } from 'react-bootstrap';

const Register = () => {
    const [newUser, setNewUser]= useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlechange = (e) => {
        setNewUser({...newUser , [e.target.name]: e.target.value})
    }

    const handleUser =(e) => {
        e.preventDefault();
        //newUser.role="client"
        dispatch(register(newUser))
        navigate ('/profile')
    }
  return (
    <div className='register'>
        <h1>Register User</h1>
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" onChange={handlechange}/>
        <Form.Label>email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={handlechange}/>
        <Form.Label>password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" name="password" onChange={handlechange}/>
        <Form.Label>phone</Form.Label>
        <Form.Control type="phone" placeholder="Enter phone" name="phone" onChange={handlechange}/>
        <Link to='/profile'> <Button className='btn-register' variant="primary" type="submit" onClick={handlechange}>Register</Button> </Link>

    </div>
  )
}

export default Register