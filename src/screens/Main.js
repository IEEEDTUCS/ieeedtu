import { Route, Switch } from "react-router-dom";

import "../styles/main.css";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Council from "./Council";
import Events from "./Events";
import Home from "./Home";

const Main = (props) => {
  return (
    <>
      <div className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/events" component={Events} />
          <Route path="/council" component={Council} />
          <Route path="/contactus" component={ContactUs} />
        </Switch>
      </div>
    </>
  );
};

export default Main;
