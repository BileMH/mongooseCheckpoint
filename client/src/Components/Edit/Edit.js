import React, {useEffect,useState} from "react";
import { Button, Form }  from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useDispatch,useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import {editContact,getContact} from "../../Js/Actions/contact";


const Edit = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const match = useMatch('/edit/:id')
  const contactToGet = useSelector (State => State.contactReducer.contactToGet)
  const [newContact , SetNewContact] = useState({})
  const handleChange = (e) => {
    SetNewContact({...newContact , [e.target.name]:e.target.value})
  }
  useEffect(()=>{
    dispatch(getContact(match.params.id))
  })
  const handleEdit = () =>{
    dispatch(editContact(match.params.id , newContact))
    navigate(-1)
  }
  return (
    <div>
        <Helmet>
          <meta charSet="utf-8"/>
          <title>Edit</title>
          <link rel="Canonical"/>
        </Helmet>
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder={`${contactToGet.name}`} onChange={handleChange} name='name' />
        <Form.Label>E-mail:</Form.Label>
        <Form.Control type="text" placeholder={`${contactToGet.email}`} onChange={handleChange} name='email' />
        <Form.Label>phone:</Form.Label>
        <Form.Control type="text" placeholder={`${contactToGet.phone}`} onChange={handleChange} name='phone' />
        <Button variant="prinary" onClick={handleEdit}>Edit</Button>

    </div>
  );
};

export default Edit