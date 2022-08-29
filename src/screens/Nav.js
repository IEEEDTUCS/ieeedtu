import {
  AiFillHome,
  AiFillIdcard,
  AiFillCalendar,
  AiOutlineTeam,
  AiFillPhone,
} from "react-icons/ai";

import navhero from "../images/IEEE_DTU_Logo_Transparent_White.svg";
import NavItem from "../components/navItem";

import "../styles/nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <img src={navhero} alt="IEEE Logo" />
      <NavItem name="Home" link="/" svg={<AiFillHome />} addClass="first" />
      <NavItem name="About Us" link="/aboutus" svg={<AiFillIdcard />} />
      <NavItem name="Events" link="/events" svg={<AiFillCalendar />} />
      <NavItem name="Council" link="/council" svg={<AiOutlineTeam />} />
      <NavItem
        name="Contact Us"
        link="/contactus"
        svg={<AiFillPhone />}
        addClass="last"
      />
    </div>
  );
};

export default Nav;
