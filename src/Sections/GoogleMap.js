import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

export default function GoogleMap(props) {
  const { wholeData, focusedCenter } = props;

  return (
    <GoogleMapWrap>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: "AIzaSyDI04mQwT6Tr7K1G00cEJlU1D4uGAffpKA" }}
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={{ lat: 36.5, lng: 128 }}
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
  background: ${props => (props.isHovered ? "#D4293F" : "#00cae9")};
  transform: rotate(-45deg);
  z-index: ${props => (props.isHovered ? 1 : 0)};
  &:hover {
    z-index: 1;
  }
`;
