import { Link } from 'react-router-dom';

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={"dropdown"}>
      {submenus.map((submenu, index) => (
        <li key={index} className={dropdown ? "show": "menu-item"}>
          <Link to={submenu.url}>{submenu.title}</Link>
        </li>
      ))}

    </ul>
  )
}

export default Dropdown;