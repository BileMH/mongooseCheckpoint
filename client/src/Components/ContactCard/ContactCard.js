import React from 'react'
import { Button, Card } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteContact } from '../../Js/Actions/contact'

const ContactCard = ({contact}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div>
<Card style={{width: '18rem'}}>
  <Card.Img variant="top" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffr%2Ficone-gratuite%2Femployeur_6171591&psig=AOvVaw0mfa-fzL5Q684cRnFJzRFG&ust=1690291856155000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCjpP-5p4ADFQAAAAAdAAAAABAE"/>
  <Card.Body>
    <Card.Title>{contact.name}</Card.Title>
    <Card.Text>{contact.email}</Card.Text>
    <Card.Text>{contact.phone}</Card.Text>
    <Button variant="success" onClick={()=> navigate (`/edit/${contact._id}`)}>Edit</Button>
    <Button variant="danger" onClick={()=>dispatch(deleteContact(contact._id))}>Delete</Button>
  </Card.Body>
</Card>
        
    </div>
  )
}

export default ContactCard