import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Flat from './components/flat-component/flat';
import Marker from './components/marker/marker';

import GoogleMapReact from 'google-map-react';

const flat =  {
  "id": 145,
  "name": "Charm at the Steps of the Sacre Coeur/Montmartre",
  "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
  "price": 164,
  "priceCurrency": "EUR",
  "lat": 48.884211,
  "lng": 2.346890
};

const flats = [flat, flat, flat, flat];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    };
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          flats: data
        });
      });
  }


  render() {
    const center = {
      lat: 48.888839,
      lng: 2.339208
    }

    return (
     <div className="app">
      <div className="main">
        <div className="search"></div>
        <div className="flats">
          {this.state.flats.map((flat) => {
            return <Flat flat={flat} />
          })}
        </div>
      </div>
      <div className="map">
      <GoogleMapReact
      center={center}
      zoom={15}
    >
    {this.state.flats.map((flat) => {
      return <Marker lat={flat.lat} lng={flat.lng} text={flat.price} />
    })}
    </GoogleMapReact>
      </div>
     </div>
    )
  }
}

export default App;
