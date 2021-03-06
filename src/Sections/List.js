import React from "react";
import styled from "styled-components";
// import style from "../Styles/List.css"

export default function List({
  allDatas,
  focusedCenterId,
  setfocusedCenter,
  pdfBtn,
}) {
  const basicCenter = { lat: 36.5, lng: 128 };

  return (
    <ListWrapper>
      {allDatas?.map(center => {
        const isHovered = focusedCenterId === center.id;
        return (
          <ListWrap
            onClick={() =>
              setfocusedCenter({
                id: center.id,
                center: { lat: Number(center.lng), lng: Number(center.lat) },
                // zoom: 10,
                zoom: 13,
              })
            }
            onMouseEnter={() =>
              setfocusedCenter({
                id: center.id,
                center: basicCenter,
                // zoom: 7.5,
                zoom: 10.5,
              })
            }
            onMouseLeave={() =>
              setfocusedCenter({
                id: 0,
                center: basicCenter,
                zoom: 7.5,
              })
            }
          >
            <NameTypeWrap>
              <CenterName isHovered={isHovered}>{center.centerName}</CenterName>
              <CenterType>&nbsp;({center.centerType})</CenterType>
            </NameTypeWrap>
            <FacilityName isHovered={isHovered}>
              {center.facilityName}
            </FacilityName>
            <Address isHovered={isHovered}>주소: {center.address}</Address>
            {pdfBtn}
          </ListWrap>
        );
      })}
    </ListWrapper>
  );
}

// width: 40 %;
// min-width: fit-content;
// height: inherit;

const ListWrapper = styled.article`
  width:600px;
  height: inherit;
  overflow: auto;

`;

const ListWrap = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85px;
  padding: 15px 30px;
  border-top: 1px solid lightgrey;
  &:first-child {
    border-top: 0px;
  }
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 30px -10px black;
  }
`;

const NameTypeWrap = styled.div`
  display: flex;
  align-items: center;
  
`;

const CenterName = styled.div`
  color: ${props => (props.isHovered ? "darkblue" : "black")};
  font-size: 18px;
  // font-weight: bold;
`;

const CenterType = styled.div`
  font-size: 12px;
  color: grey;
`;

const FacilityName = styled.div`
  width: fit-content;
  ${props => (props.isHovered ? "border-bottom: 1px solid #414141" : "")};
  font-size: 14px;
`;

const Address = styled(FacilityName)`
  font-size: 12px;
`;
