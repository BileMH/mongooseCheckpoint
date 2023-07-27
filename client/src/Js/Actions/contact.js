import axios from "axios" 
import{
  FAIL_CONTACTS,
  GET_CONTENT,
  GET_CONTACTS,
  LOAD_CONTACTS,
} from "../Actiontypes/contact";

                // GET ALL CONTACTS
export const getContacts = () => async (dispatch) => {
  dispatch({ type: LOAD_CONTACTS});
  try {
    let result = await axios.get("api/contact/all");
    dispatch({ type: GET_CONTACTS, payload : result.data});
  } 
  catch(error) {
    dispatch({ type: FAIL_CONTACTS, payload: error.response});
  }
};
                // GET CONTACT
                export const addContact = (newContact) => async (dispatch) => {
                  try {
                   await axios.post("/api/contact/add",newContact);
                   dispatch (getContacts());
                  } 
                  catch(error) {
                    dispatch({ type: FAIL_CONTACTS, payload: error.response});
                  }
                };
                // DELETE CONTACT
export const deletecontact  = (id) => async (dispatch) => {
  try {
   await axios.delete(`/api/contact/${id}`);
   dispatch (getContacts());
  } 
  catch(error) {
    dispatch({ type: FAIL_CONTACTS, payload: error.response});
  }
};
                // UPDATE CONTACT
export const editContact  = (id,newContact) => async (dispatch) => {
  try {
   await axios.put(`/api/contact/${id}`,newContact);
   dispatch (getContacts());
  } 
  catch(error) {
    dispatch({ type: FAIL_CONTACTS, payload: error.response});
  }
};
                  // GET CONTACT
export const getContact  = (id) => async (dispatch) => {
  dispatch ({ type: LOAD_CONTACTS});
  try {
   let result = await axios.get(`/api/contact/${id}`);
   dispatch ({ type : GET_CONTENT,payload: result.data});
  } 
  catch(error) {
    dispatch({ type: FAIL_CONTACTS, payload: error.response});
  }
};