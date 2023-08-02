import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addContact } from '../../Js/Actions/contact';

const Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newContact, setNewContact] = useState({});

  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };
  const handleAdd = () => {
    dispatch(addContact(newContact));
    navigate('/ContactList');
  };

  return (
    <div>
      
        <meta charSet='utf-8'/>
        <title>AddContact</title>
        <link rel='canonical'/>
      
      <h1> ADD </h1>
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email"  onChange= {handleChange} name='email' />
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter name"    onChange={handleChange} name= 'name' />
      <Form.Label>phone</Form.Label>
      <Form.Control type="text" placeholder="Enter phone"  onChange={handleChange} name='phone'  />
      <Button variant="primary" onClick={handleAdd}>ADD</Button>
    </div>
  );
}

export default Add;