import React from 'react';

const TempButton = (props) => {
    return (
        <React.Fragment>   
            <div className="form-check form-check-inline">
                <input className="form-check-input" 
                type="radio"
                name="degree-type"
                id="celsius"
                value="metric"
                checked={props.degreeType === "metric"}
                onChange={event => props.setDegreeType(event.target.value)} />
                <label className="form-check-label" htmlFor="celsius">Celsius</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input"
                type="radio"
                name="degree-type"
                id="degree-type"
                value="imperial"
                checked={props.degreeType === "imperial"}
                onChange={event => props.setDegreeType(event.target.value)} />
                <label className="form-check-label" htmlFor="farenheit">Farenheit</label>
            </div>
        </React.Fragment>
    )
}

export default TempButton;