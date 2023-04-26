import { Link } from 'react-router-dom';

const MenuItems = ({ items, loggedIn }) => {
  return (
    <div className="navSection">
      {items.submenu ? (
        <div className="dropdown">
          <div className="dropdown-title">{items.title}</div>
          <div className="dropdown-content">
            {items.submenu.map((item, index) => {
              if (loggedIn && item.displayLoggedIn) {
                return <Link to={item.url} key={index}>{item.title}</Link>
              } else if (!loggedIn && item.displayLoggedOut) {
                return <Link to={item.url} key={index}>{item.title}</Link>
              } else {
                return undefined;
              }
            })}
          </div>
        </div>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </div>
  );
};

export default MenuItems;
