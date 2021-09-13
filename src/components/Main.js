import { Route, Switch } from "react-router-dom";

import '../styles/main.css'
import AboutUs from "../screens/AboutUs";
import ContactUs from "../screens/ContactUs";
import Council from "../screens/Council";
import Events from "../screens/Events";
import Home from "../screens/Home";



const Main = (props) => {
  return (<>
    <div className='main'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/events' component={Events} />
        <Route path='/council' component={Council} />
        <Route path='/contactus' component={ContactUs} />
      </Switch>
    </div>
  </>);
}

export default Main;
