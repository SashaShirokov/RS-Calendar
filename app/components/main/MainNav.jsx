import  React from 'react';
import {Link, IndexLink} from 'react-router';

class MainNav extends React.Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Rolling Scopes</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Schedule</IndexLink>
                        </li>
                        <li>
                            <IndexLink to="/curriculum" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Curriculum</IndexLink>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li>
                            <IndexLink to="/weather" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Weather</IndexLink>
                        </li>
                        <li>
                            <IndexLink to="/timer" className="color" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Timer</IndexLink>
                        </li>
                        <li>
                            <IndexLink to="/feedback" className="nav__feedback" activeClassName="active" activeStyle={{fontWeight: "bold"}}>FeedBack</IndexLink>
                        </li>
                        <li>
                            <IndexLink to="/about" className="nav__about" activeClassName="active" activeStyle={{fontWeight:  "bold"}}>About</IndexLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MainNav;
