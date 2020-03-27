import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./menu.css";

const Menu = ({ menuItems }) => (
  <nav className="menu">
    {menuItems.map(item => (
      <Link activeClassName="active" to={item.path} key={item.name}>
        {item.name}
      </Link>
    ))}
  </nav>
);

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object)
};

Menu.defaultProps = {
  menuItems: []
};

export default Menu;
