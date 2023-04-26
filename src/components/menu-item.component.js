import Dropdown from "./dropdown.component";
import { Link } from 'react-router-dom';
import { useState } from 'react'

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="menu-items">
      {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true": "false"}
            onClick={() => setDropdown((prev) => !prev)}>
            {items.title}{' '}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </div>
  );
};

export default MenuItems;