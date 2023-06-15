import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import MenuItems from './menu-item.component';


function Navbar() {
  const { userName } = useContext(UserContext);
  const menuItems = [
    {
      title: "Home",
      url: '/',
    },
    {
      title: "Recipes",
      url: '',
      submenu: [
        {
          title: "Explore New Recipes",
          url: '/explore',
          displayLoggedIn: true,
          displayLoggedOut: true,
        },
        {
          title: "Create New Recipe",
          url: '/create',
          displayLoggedIn: true,
          displayLoggedOut: false,
        },
        {
          title: "My Recipes",
          url: '/myRecipes',
          displayLoggedIn: true,
          displayLoggedOut: false,
        },
        {
          title: "Liked Recipes",
          url: '/',
          displayLoggedIn: true,
          displayLoggedOut: false,
        }
      ]
    },
    {
      title: "Account",
      url: '',
      submenu: [
        {
          title: "Login",
          url: '/login',
          displayLoggedIn: false,
          displayLoggedOut: true,
        },
        {
          title: "Create Account",
          url: '/user',
          displayLoggedIn: false,
          displayLoggedOut: true,
        },
        {
          title: "Update Password",
          url: '/updatePassword',
          displayLoggedIn: true,
          displayLoggedOut: false,
        },
        {
          title: "Logout",
          url: '/logout',
          displayLoggedIn: true,
          displayLoggedOut: false,
        }
      ]
    }
  ]

  return (
    <nav className='navbar'>
      <Link to="/" id='title'>Recipe Share</Link>
      <div className="navContainer">
        {menuItems.map((menu, index) => {
          return <MenuItems items={menu} key={index} loggedIn={userName ? true : false} />;
        })}
      </div>
    </nav>
    )
  }

export default Navbar;