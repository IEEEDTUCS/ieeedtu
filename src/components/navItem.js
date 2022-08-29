import { Link } from "react-router-dom";

const NavItem = ({ svg, link, name, addClass }) => {
  return (
    <Link to={link}>
      <span className={`nav-item ${addClass}`}>
        <span>{svg}</span>
        <p>{name}</p>
      </span>
    </Link>
  );
};

export default NavItem;
