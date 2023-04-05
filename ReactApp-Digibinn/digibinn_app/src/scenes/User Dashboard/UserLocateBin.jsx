import React, { useState, Component } from "react";
import Sidebar from "../../components/Sidebar";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

function UserLocateBin({ google }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  fetch(
    `   `
  )
    .then((response) => response.json())
    .then((data) => {
      setLatitude(data.feeds[0].field1);
      setLongitude(data.feeds[0].field2);
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  class MapContainer extends Component {
    render() {
      return (
        <Map google={google} zoom={8} initialCenter={{ lat: latitude, lng: longitude }} style={{ width: '1165px', height: '650px' }}>
          <Marker position={{ lat: latitude, lng: longitude }} />
        </Map>
      );
    }
  }

  const MapContainerWrapper = GoogleApiWrapper({
    apiKey: "AIzaSyD8M-ofb9ibe5IPl__uwIsmzPd8i5-OmHg",
  })(MapContainer);

  return (
    <div className="flex bg-neutral-900 min-h-screen pt-6 sm:justify-center sm:pt-0">
      <Sidebar />
      <div className="container mx-auto mt-12">
        <div className="flex-col mb-6">
          <div className="w-full px-4 py-5 bg-black rounded-lg shadow mb-10">
            <div className="text-[18px] font-medium text-white truncate mb-5">
              Bin locations
            </div>
            <div className="mt-1 text-3xl font-semibold text-white items-center">
              <MapContainerWrapper />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD8M-ofb9ibe5IPl__uwIsmzPd8i5-OmHg",
})(UserLocateBin);
