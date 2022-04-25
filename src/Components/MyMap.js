import React from "react";
import {useState} from "react";
import { Map, Marker } from "pigeon-maps";
import 'react-tabs/style/react-tabs.css';



export default function MyMap({lat, lng}) {
    const [center, setCenter] = useState([lat, lng])
    const [zoom, setZoom] = useState(12)
    const [hue, setHue] = useState(0)
    const color = `hsl(${hue % 360}deg 29% 90%)`
  
    return (
    
      <Map className="MapClass"
        height={600}
        center={center} 
        zoom={zoom} 
        onBoundsChanged={({ center, zoom }) => { 
          <Marker width={50} anchor={[lat, lng]} color={color}></Marker>
          setCenter(center) 
          setZoom(zoom) 
        }} 
      >
      <Marker width={50} anchor={[lat, lng]}/>

      </Map>
    )

  }






//  const MyMap =({lat, lng}) =>{
//   return (
      
//     <Map height={600} defaultCenter={[lat, lng]} defaultZoom={16}>
//       <Marker width={50} anchor={[lat, lng]} />
//     </Map>
    
//   )
// }

// export default MyMap;