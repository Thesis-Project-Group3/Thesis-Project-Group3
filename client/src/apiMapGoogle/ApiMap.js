//import used technologies
import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

//create ApiMap Compo
export class ApiMap extends Component {
  // render ApiMap
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
        </InfoWindow>
      </Map>
    );
  }
}

//export GoogleApiWrapper
export default GoogleApiWrapper({
  apiKey: "AIzaSyDTuZu_Pe5uaFt1U-uIwi9tikyHn6swI_A",
})(ApiMap);
