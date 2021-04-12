import React from "react"; 

const Home = () => {
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let month = months[d.getMonth()];
        let date = d.getDate();
        let year = d.getFullYear();

        return `${day} ${month} ${date}, ${year}` 
        
    }
    return (
        <div className="home">
            <div className="homeDiv">
                <h1>Welcome to Indy's Guide for Entertainment</h1>
                <div className="date">
                    <h3>{dateBuilder(new Date())}</h3>
                    </div>
                <h4>This app is intended to be a reference for local events around town with google map markers, current weather at your geolocation and restaurants near you! Lets Explore!
                </h4>
                <hr />
            </div>
        </div>
    );
};

export default Home;