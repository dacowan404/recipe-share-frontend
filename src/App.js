import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import './App.css';
import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import Explore from "./components/recipe-list.component";
import MyRecipes from "./components/myRecipes.component";
import CreateRecipe from "./components/create-recipe.component";
import ViewRecipe from "./components/view-recipe.component";
import EditRecipe from "./components/edit-recipe.component";
import DeleteRecipe from "./components/delete-recipe.component";
import CreateUser from "./components/create-user.component";
import Login from "./components/login.component";
import Logout from "./components/logout.component";
import UpdatePassword from "./components/update-password.component"


export const UserContext = React.createContext({
  BACKEND_ADDRESS: process.env.REACT_APP_BACKEND_ADDRESS,
  //BACKEND_ADDRESS: process.env.REACT_APP_TEST_ADD,
  userName: null,
  userID: null,
  setUserName: () => {},
  setUserID: () => {}
})

function App() {
  const { BACKEND_ADDRESS } = useContext(UserContext);
  const [userName, setUserName] = useState(null);
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      axios.get(BACKEND_ADDRESS + '/users/auth/checkLogin', {headers: {'Authorization': `Bearer ${window.localStorage.getItem('token')}`}})
        .then(response => {
          if (response.status === 200) {
          setUserName(response.data.userName);
          setUserID(response.data.userID);
          }
          else {
            setUserName(null);
            setUserID(null);
          }
        })
      }
  },[userName, userID]);

  useEffect(() => {
    axios.get(BACKEND_ADDRESS + '/start')
  }, []);
  
  return (

    <UserContext.Provider value={{BACKEND_ADDRESS, userName, setUserName, userID, setUserID}}>
      <BrowserRouter>
        <div className="nav">
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/myRecipes' element={<MyRecipes />} />
          <Route path='/create' element={<CreateRecipe />} />
          <Route path='/recipe/:id' element={<ViewRecipe />} />
          <Route path='/edit/:id' element={<EditRecipe />} />
          <Route path='/delete/:id' element={<DeleteRecipe />} />
          <Route path='/user' element={<CreateUser/>} />
          <Route path='/updatePassword' element={<UpdatePassword />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
        </Routes> 
      </BrowserRouter>
      <div className="gitHubLinks">
        <a href='https://github.com/dacowan404/recipe-share-frontend' className="iconContainer"><div className="icon"></div>Front-End Code</a>
        <a href='https://github.com/dacowan404/recipe-share-backend' className="iconContainer"><div className="icon"></div>Back-End Code</a>
      </div>
    </UserContext.Provider>
  );
} 

export default App;