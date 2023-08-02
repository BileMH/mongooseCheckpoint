import './App.css';
import { Route, Routes } from 'react-router-dom';
import Edit from './Components/Edit/Edit';
import ContactList from './Components/ContactList/ContactList';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import  Error from './Pages/Error/Error' ;
import Add from './Components/Add/Add';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { current } from './Js/Actions/user';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch ( current())
    }
  }, [dispatch])
  return (
    <div className="App">
     <NavBar/>
        <Routes>
          <Route exact path='/' element = {<Home/>}/>
          <Route path='/*' element = {<Error/>}/>
          <Route path='/contactlist' element= {<ContactList/>}/>
          <Route path='/edit/:id' element = {<Edit/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="/add" element = {<Add/>}/>
          <Route path='/Register' element = {<Register/>} />
          <Route path='/Profile' element = {<Profile/>} />
          
          </Routes> 
    </div>
  );
}

export default App;
