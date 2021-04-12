
import React from 'react';
import { usePosition } from 'use-position';

const Location = () => {
    const watch = true;
    const {
      latitude,
      longitude,
    } = usePosition(watch);
    
    return (
      <div className="locationBox">
        <h8 className="changePlease">Lat: {latitude}</h8>
        <br />
        <h8 className="changePlease">Lng: {longitude}</h8>
      </div>
    );
};

  export default Location;