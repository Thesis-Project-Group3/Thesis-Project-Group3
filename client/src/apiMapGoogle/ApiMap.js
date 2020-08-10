import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



export class ApiMap extends Component {
  
    render() {
      return (
        <Map google={this.props.google} zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176}}>
   
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                {/* <h1>{this.state.selectedPlace.name}</h1> */}
              </div>
          </InfoWindow>
        </Map>
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: ("AIzaSyDTuZu_Pe5uaFt1U-uIwi9tikyHn6swI_A")
  })(ApiMap)

  const mapStyles = {
    width: '50%',
    height: '50%',
  };