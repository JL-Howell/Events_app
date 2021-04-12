import React from 'react';

const conditions = (props) => {
    return (
        <div>
            {props.weather.cod === 200 ?
                <div>
                    <h5><strong>{props.weather.name}</strong></h5>
                    <p>It is currently {Math.round(props.weather.main.temp)} degrees out with {props.weather.weather[0].description}.</p>
                </div>
                : null
            }
        </div>
    )
};

export default conditions;