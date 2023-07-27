    //INITIALSTATE

import {
  FAIL_CONTACTS,
  GET_CONTENT,
  GET_CONTACTS,
  LOAD_CONTACTS,
} from "../Actiontypes/contact.js";


const initialState ={
  listContacts: [],
  errors: null , 
  load: false,
  contactToGet: {},
};
    //PURE FUNCTIONS
const contactReducer = (state = initialState, { type , payload}) => {
  switch (type) {
    case LOAD_CONTACTS:
      return {...state, load: true};
      case GET_CONTACTS :
        return {...state, load: false,listContacts: payload.ListContacts};
        case GET_CONTENT:
          return {...state, load: false, contactToGet: payload.contactToGet};
          case FAIL_CONTACTS:
            return {...state, load: false, errors:payload};
            default:
              return state ;
  }
};
export default contactReducer ;