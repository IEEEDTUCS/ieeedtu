import { Link } from 'react-router-dom'

import '../styles/nav.css'

const Nav = (props) => {
    return(<>
        <div className="nav">
            <NavHero />
            <Link to='/'>Home</Link>
            <Link to='/aboutus'>aboutus</Link>
            <Link to='/events'>events</Link>
            <Link to='/council'>council</Link>
            <Link to='/contactus'>contactus</Link>
        </div>
    </>);
}

const NavHero = (props) => {
    return(<>
        Nav Hero
    </>);
}


export default Nav;