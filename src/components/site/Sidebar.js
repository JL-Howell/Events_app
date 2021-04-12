import React from 'react'
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Home from './Home';
import Maps from '../googleMapAPI/mapEvent';
import Events from '../Events/Events';
import Restaurants from '../RestaurantAPI/Restaurant';
import Weather from '../weatherAPI/Weather';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-list-styling">
                <ul className="sidebar-list list-unstyled">
                    <li><Link to="/Events_app">Home</Link></li>
                    <li><Link to="/maps">Google Maps</Link></li>
                    <li><Link to="/events">Local Events</Link></li>
                    <li><Link to="/food">Local Restaurants</Link></li>
                    <li><Link to="/weatherAPI">Local Weather</Link></li>
                </ul>
            </div>
            <div className="sidebar-route">
                <Switch>
                    <Route exact path="/Events_app"><Home /></Route>
                    <Route exact path="/home"><Home /></Route>
                    <Route exact path="/maps"><Maps /></Route>
                    <Route exact path="/events"><Events /></Route>
                    <Route exact path="/food"><Restaurants /></Route>
                    <Route exact path="/weatherAPI"><Weather /></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;