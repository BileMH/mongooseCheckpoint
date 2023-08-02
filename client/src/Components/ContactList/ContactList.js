import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Helmet } from 'react-helmet';
import { Spinner } from 'react-bootstrap';
import ContactCard from '../ContactCard/ContactCard';
import { getContacts } from '../../Js/Actions/contact';

const ContactList = () => {
  const dispatch = useDispatch();
  const listContacts = useSelector(state => state.contactReducer.listContacts);
  const load = useSelector(state => state.contactReducer.load);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <meta charSet='utf_8' />
        <title>contactlist</title>
        <link rel='canonical' />
      </Helmet>
      <h1>CONTACT LIST</h1>
      <div className='userlist'>
        {load ? <Spinner animation='border' /> : listContacts.map((el) => <ContactCard Contact={el} key={el._id} />)}
      </div>
    </div>
  );
};

export default ContactList;