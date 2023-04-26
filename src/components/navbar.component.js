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
          url: '/explore'
        },
        {
          title: "My Recipes",
          url: '/myRecipes',
        },
        {
          title: "Liked Recipes",
          url: '/'
        }
      ]
    },
    {
      title: "Account",
      url: '',
      submenu: [
        {
          title: "Login",
          url: '/login'
        },
        {
          title: "Create Account",
          url: '/user'
        },
        {
          title: "Update Password",
          url: '/updatePassword',
        },
        {
          title: "Logout",
          url: '/logout'
        }
      ]
    }
  ]
  
  return (
    <nav className='navbar'>
      <Link to="/" id='title'>Recipe Share</Link>
      <div className="navContainer menus">
        {menuItems.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
      </div>
    </nav>
    )
  }

export default Navbar;


/*     <nav className='navbar'>
      <Link to="/" id='title'>Recipe Share</Link>
      <div className='navContainer'>
        <Link to='/'>Home</Link>
        <Link to='/explore'>Explore</Link>

      { userName ? 
      <>
        <Link to='/create'>Create Recipe</Link>
        <Link to='/myRecipes'>My Recipes</Link>
        <Link to='/logout'>Logout</Link>
      </>
      : <>
        <div></div>
        <Link to='/user'>Create Account</Link>
        <Link to='/login'>Login</Link>
      </>
      }


      </div>
    </nav>
*/
