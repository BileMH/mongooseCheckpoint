import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import ContactCard from '../ContactCard/ContactCard'
import './ContactList.css'
import  Spinner  from 'react-bootstrap/Spinner';
import {Helmet} from "react-helmet";
import { getContacts } from '../../Js/Actions/contact';

const ContactList = () => {
  const dispatch =useDispatch()
  const ListContacts = useSelector (state => state.contactReducer.ListContacts)
  const load = useSelector(state => state.contactReducer.load)
  useEffect(() =>{
    dispatch(getContacts())
  },[dispatch])
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ContactList</title>
        <link rel="canonical" />
      </Helmet>
      <h1>ContactList</h1>
      <div className='userlist'>
        {load ? (
          <Spinner animation="border" />
        ) : (
          ListContacts && ListContacts.map((el) => <ContactCard Contact={el} key={el._id} />)
        )}
      </div>
    </div>
  );
}

export default ContactList