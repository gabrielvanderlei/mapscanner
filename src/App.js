import logo from './logo.svg';
import './App.css';

import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup
} from 'react-leaflet'

function App() {
  const data = {
    title: "Simple Map",
    points: [
      { lat: -8.5593548, log: -34.4880328, description: ( <>A pretty CSS3 popup. <br /> Easily customizable.</> ) },
      { lat: -9.5593548, log: -34.4880328, description: ( <>A pretty CSS3 popup. <br /> Easily customizable.</> ) },
      { lat: -10.5593548, log: -34.4880328, description: ( <>A pretty CSS3 popup. <br /> Easily customizable.</> ) },
      { lat: -11.5593548, log: -34.4880328, description: ( <>A pretty CSS3 popup. <br /> Easily customizable.</> ) }
    ]
  };

  return (
    <div>
      <header>
        {data.title}
      </header>
      <MapContainer center={[-8.0593548, -34.8880328]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {data.points.map(pointInfo => (
          <Marker position={[pointInfo.lat, pointInfo.log]}>
            <Popup>
              {pointInfo.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
