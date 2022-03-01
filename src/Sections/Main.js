import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import List from "./List";
import GoogleMap from "./GoogleMap";
import Pdf from "react-to-pdf";
import { Download } from "@styled-icons/bootstrap/Download";
// 첫 화면 지도
// 위도( Latitude ), 경도( Longitude )
export default function Main() {
  // useState 를 사용 할 때에는 상태의 기본값을 파라미터로 넣어서 호출
  // state로 설정
  const [allDatas, setAllDatas] = useState();
  const [focusedCenter, setfocusedCenter] = useState(
    // {"address":"서울특별시 중구 을지로 39길 29","centerName":"코로나19 중앙 예방접종센터","centerType":"중앙/권역","createdAt":"2021-03-03 07:00:52","facilityName":"국립중앙의료원 D동","id":1,"lat":"37.567817","lng":"127.004501","org":"국립중앙의료원","phoneNumber":"02-2260-7114","sido":"서울특별시","sigungu":"중구","updatedAt":"2021-07-16 04:55:08","zipCode":"04562"},
    {
    id: 0,
    center: { lat: 36.5, lng: 127.5 },
    zoom: 7.5,
    },
      {
    id: 1,
    center: { lat: 37.567817, lng: 127.004501 },
    zoom: 17.5,
  }
  );

  useEffect(() => {
    fetch(
      "https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=100&serviceKey=IfcuH7lGQKchQgb97KnrXaH73w3PuD6Rwg295YWGvEmkvYlEfw7xdCtU%2FFnPZ0ju0BamQKp2YjoxiIzV96MXSw%3D%3D"
    )
      .then(res => res.json())
      .then(res => setAllDatas(res.data));
  }, []);

  const ref = useRef();
  const options = {
    orientation: "landscape",
    format: "a3",
  }; 
    // console.log(focusedCenterId);

  const pdfBtn = (
    <Pdf
      targetRef={ref}
      filename="코로나19 백신 접종 기관 위치.pdf"
      options={options}
    >
      {({ toPdf }) => <DownloadIcon onClick={toPdf} />}
    </Pdf>
  );

  return (
    <MainWrap ref={ref}>
      <Header>
        {/* <Logo src="https://cdn.icon-icons.com/icons2/635/PNG/512/syringe-5_icon-icons.com_58820.png"
        /> */}
        코로나19 백신 접종 기관 조회
        {/* 임시 */}
        {/* <a href="/temporary">❤</a> */}
      </Header>
      <ListGoogleMapWrap>
        <List
          allDatas={allDatas}
          focusedCenterId={focusedCenter?.id}
          setfocusedCenter={setfocusedCenter}
          pdfBtn={pdfBtn}
        />
        <GoogleMap wholeData={allDatas} focusedCenter={focusedCenter} />
      </ListGoogleMapWrap>
    </MainWrap>
  );
}

const MainWrap = styled.div`
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color : darkblue;
  color : white;
  font-size: 33px;
  font-weight: 550;
  letter-spacing: 2px;
  // box-shadow: 5px -10px 71px -10px black;
  font-family: 'Jua', sans-serif;
  border-bottom: double 5px black
  
`;

const ListGoogleMapWrap = styled.main`
  display: flex;
  height: 90vh;

`;

const Logo = styled.img`
  width: 27px;
  height: 27px;
  object-fit: cover;
`;

const DownloadIcon = styled(Download)`
  position: absolute;
  width: 17px;
  right: 20px;
  bottom: 20px;
  color : darkblue;
`;
