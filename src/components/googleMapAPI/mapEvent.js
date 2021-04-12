import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

export const MapContainer = () => {
  const [ selected, setSelected ] = useState({});

  const onSelect = item => {
    setSelected(item);
  }
  const locations = [
    {
      name: "Eiteljorg Museum",
      location: { 
        lat: 39.76878,
        lng: -86.16781
      },
    },
    {
      name: "Children's Museum",
      location: { 
        lat: 39.81083,
        lng: -86.15795
      },
    },
    {
      name: "Indianapolis Canal Walk",
      location: { 
        lat: 39.77523,
        lng: -86.16501
      },
    },
    {
      name: "Benjamin Harrison Presidential Site",
      location: { 
        lat: 39.78407,
        lng: -86.15386
      },
    },
    {
      name: "Taxman Bargersville",
      location: { 
        lat: 39.52126,
        lng: -86.16641
      },
    },
    {
      name: "Indianapolis Motor Speedway Museum",
      location: { 
        lat: 39.79014,
        lng: -86.23362
      },
    },
    {
      name: "Newfields",
      location: { 
        lat: 39.82609,
        lng: -86.18566
      },
    },
    {
      name: "Indiana Historical Society",
      location: { 
        lat: 39.77039,
        lng: -86.16556
      },
    },
    {
      name: "Indiana State Museum",
      location: { 
        lat: 39.76886,
        lng: -86.16945
      },
    },
    {
      name: "Garfield Park Conservatory & Gardens",
      location: { 
        lat: 39.73264,
        lng: -86.14132
      },
    }
  ];
  
  const mapStyles = {        
    height: '100vh',
    width: "100vw"
  };
  
  const defaultCenter = {
    lat: 39.79528, 
    lng: -86.15201
  }
  
  return (
     <LoadScript
       googleMapsApiKey= 'AIzaSyCmjPP1f-OvwfRANEXk-pzSohWtQKAXEzc'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={defaultCenter}
          >
         {
            locations.map(item => {
              return (
              <Marker 
                key={item.name} 
                description={item.event}
                link={item.link}
                position={item.location}
                onClick={() => onSelect(item)}
              />
              )
            })
         }
        {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
            )
         }
     </GoogleMap>
     </LoadScript>
  )
};

export default MapContainer;
// import React from "react";
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng
// } from "react-places-autocomplete";

// export default function App() {
//   const [address, setAddress] = React.useState("");
//   const [coordinates, setCoordinates] = React.useState({
//     lat: null,
//     lng: null
//   });

//   const handleSelect = async value => {
//     const results = await geocodeByAddress(value);
//     const latLng = await getLatLng(results[0]);
//     setAddress(value);
//     setCoordinates(latLng);
//   };

//   return (
//     <div>
//       <PlacesAutocomplete
//         value={address}
//         onChange={setAddress}
//         onSelect={handleSelect}
//       >
//         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//           <div>
//             <p>Latitude: {coordinates.lat}</p>
//             <p>Longitude: {coordinates.lng}</p>

//             <input {...getInputProps({ placeholder: "Type address" })} />

//             <div>
//               {loading ? <div>...loading</div> : null}

//               {suggestions.map(suggestion => {
//                 const style = {
//                   backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
//                 };

//                 return (
//                   <div {...getSuggestionItemProps(suggestion, { style })}>
//                     {suggestion.description}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </PlacesAutocomplete>
//     </div>
//   );
// }



