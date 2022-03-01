import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import styles from "../Styles/Temporary.css"

function Temporary(props) {
  const { wholeData, focusedCenter } = props;

  return (
    // <div>
    //   <div onclick={console.log("hello")}>임시</div>
    // </div>
   <GoogleMapWrap class={styles.section}>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: "AIzaSyDI04mQwT6Tr7K1G00cEJlU1D4uGAffpKA" }}
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
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
              class={styles.div}
              
            />
          );
        })}
      </GoogleMapReact>
      </GoogleMapWrap>
  );
}

export default Temporary;


/*

center와 zoom는 필요한 default 값
JavaScript에서 getElementById는 useRef로 대체
google 객체 앞에 추가로 window 객체를 추가 선언해줘야 함
useEffect를 통하여 처음 실행될 때 맵이 띄워지도록 설정
  const mapRef = useRef(null);

  const initMap = useCallback(() => {
    new window.google.maps.Map(mapRef.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }, [mapRef]);

  useEffect(() => {
    initMap();
  }, [initMap]);
-------
   <div
      className="map"
      style={{ width: "500px", height: "500px" }}
      ref={mapRef}>
      </div>
*/