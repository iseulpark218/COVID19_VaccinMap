import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

export default function GoogleMap(props) {
  const { wholeData, focusedCenter } = props;

  return (
    <GoogleMapWrap>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDI04mQwT6Tr7K1G00cEJlU1D4uGAffpKA" }}
        // bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={{ lat: 36.5, lng: 127.5 }}
        defaultZoom={7.5}
        center={focusedCenter?.center}
        zoom={focusedCenter?.zoom}
      >
        {wholeData?.map(center => {
          return (
            <Marker
              lat={center.lng}
              lng={center.lat}
              isHovered={focusedCenter.id === center.id}
            />
          );
        })}
            <div onclick={console.log("checking marker")}></div>
      </GoogleMapReact>
    </GoogleMapWrap>
  );
}

  // width: 60%;
const GoogleMapWrap = styled.section`
width:65%;
height: inherit;
`;

const Marker = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border: 1px solid white;
  border-radius: 50% 50% 50% 0;
  background: ${props => (props.isHovered ? "red" : "blue")};
  transform: rotate(-45deg);
  z-index: ${props => (props.isHovered ? 1 : 0)};
`

 const CustomMarker = styled.text`
background: white;
      color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      width: 70px;
      height: 30px;
      font-size: 15px;
`;
