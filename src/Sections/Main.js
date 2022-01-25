import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import List from "./List";
import GoogleMap from "./GoogleMap";
import Pdf from "react-to-pdf";
import { Download } from "@styled-icons/bootstrap/Download";

export default function Main() {
  const [allDatas, setAllDatas] = useState();
  const [focusedCenter, setfocusedCenter] = useState({
    id: 0,
    center: { lat: 36.5, lng: 128 },
    zoom: 7.5,
  });

  useEffect(() => {
    fetch(
      "https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=10&serviceKey=rPjR1k5RX59RTpH3qcOa%2BH8aYFP%2BDRhMTvcdOm1j4Zi7ovY2nYj0wngbU7GangJsLpH3xHAlBn8Jdx50qZRKKw%3D%3D"
    )
      .then(res => res.json())
      .then(res => setAllDatas(res.data));
  }, []);

  const ref = useRef();
  const options = {
    orientation: "landscape",
    format: "a3",
  };

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
        <Logo src="https://cdn.icon-icons.com/icons2/635/PNG/512/syringe-5_icon-icons.com_58820.png"
        />
        &nbsp;코로나19 백신 접종 기관 조회
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
  font-size: 30px;
  font-weight: 550;
  letter-spacing: 2px;
  box-shadow: 5px -10px 71px -10px black;
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
  width: 20px;
  right: 20px;
  bottom: 20px;
`;
