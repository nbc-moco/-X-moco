import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Rate } from 'antd';
import PlaceStarRate from '../../components/homeDetail/PlaceStarRate';
import DetailInfo from '../../components/homeDetail/DetailInfo';
const { kakao } = window;

export default function PlaceDetail() {
  useEffect(() => {
    let container = document.getElementById('my');
    let options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    let mop = new window.kakao.maps.Map(container, options);
  }, []);

  return (
    <>
      <WholeCotainer>
        <OverviewContainer>
          <PlaceDetailCategory>서울</PlaceDetailCategory>
          <PlaceTitleText>
            [홍대,연남동] 할인이벤트중 대형 호리존 렌탈스튜디오 세컨드스튜디오.
            사진/영상촬영/유튜브 (다양한 사진영상조명, RGB컬러조명,
            배경지)_호리존 H룸 홍대역 홍대입구역 연남동
          </PlaceTitleText>
          <PlaceStar>
            <PlaceStarRate />
            <div>4.1점</div>
            <div>(후기 23개)</div>
          </PlaceStar>
          <PlaceDetailRepresentativePicture></PlaceDetailRepresentativePicture>
          <PlaceDetailPicturesContainer>
            <PlaceDetailPictures>
              <PlaceDetailPicture />
              <PlaceDetailPicture />
              <PlaceDetailPicture />
            </PlaceDetailPictures>
          </PlaceDetailPicturesContainer>
        </OverviewContainer>
        <DetailInfo />
      </WholeCotainer>
    </>
  );
}

const WholeCotainer = styled.div`
  position: relative;
`;

const OverviewContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 1100px;
  max-width: 100%;
  box-sizing: border-box;
  min-height: 1px;
`;

const PlaceDetailCategory = styled.div`
  margin: 20px 0 0;
  padding: 0;
  border: none;
  position: relative;
`;

const PlaceTitleText = styled.p`
  margin-top: 8px;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  line-height: 1.31;
  letter-spacing: -0.3px;
  color: rgb(27, 29, 31);
`;

const PlaceStar = styled.div`
  margin-top: 19px;
  height: 24px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PlaceDetailRepresentativePicture = styled.img`
  margin-top: 40px;
  width: 100%;
  height: 580px;
`;

const PlaceDetailPicturesContainer = styled.div`
  margin-top: 20px;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 110px;
`;

const PlaceDetailPictures = styled.div`
  display: flex;
  width: 100%;
  min-width: 100%;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0, 0, 0.25, 1);
  transition-duration: 350ms;
  transform: translate3d(0px, 0px, 0px);
`;

const PlaceDetailPicture = styled.img`
  width: 110px;
  height: 110px;
  margin-right: 10px;
  position: relative;
  transform: translate3d(0px, 0px, 0px);
  backface-visibility: hidden;
  flex-shrink: 0;
  cursor: pointer;
  opacity: 1;
`;
