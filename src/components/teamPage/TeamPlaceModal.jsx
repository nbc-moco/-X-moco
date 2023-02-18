import React, { useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

export default function TeamPlaceModal({ onClose }) {
  const [word, setWord] = useState('');
  const [resultData, setResultData] = useState([]);

  const handleClose = () => {
    onClose();
  };

  const onChangeSearch = (event) => {
    setWord(event.target.value);
  };

  const REST_API_KEY = '61b0fbfe80a8605ba2010ea70c5ac88b';

  const handleComplete = () => {
    axios
      .get(
        `https://dapi.kakao.com/v2/local/search/keyword.json?&radius=20000&query=${word}`,
        { headers: { Authorization: `KakaoAK ${REST_API_KEY}` } },
      )
      .then((res) => {
        console.log(res.data.documents);
        setResultData(res.data.documents);
      })
      .catch(() => {
        console.log('실패함');
      });
    // let fullAddress = data.address;
    // let extraAddress = '';

    // if (data.addressType === 'R') {
    //   if (data.bname !== '') {
    //     extraAddress += data.bname;
    //   }
    //   if (data.buildingName !== '') {
    //     extraAddress +=
    //       extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
    //   }
    //   fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    // }

    // setAddressDetail(fullAddress);

    // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  return (
    <>
      <WholeWrap>
        <PlaceModal>
          <ModalChang>
            <CloseBtn onClick={handleClose}>창 닫기</CloseBtn>
            <InputWrap>
              <input
                type="text"
                value={word}
                id="keyword"
                placeholder="주소나 키워드를 검색해주세요."
                onChange={onChangeSearch}
              />
              <button type="button" onClick={handleComplete}>
                검색하기
              </button>
            </InputWrap>
            <ResultSearch>
              {resultData.map((info, idx) => (
                <>
                  <JustWrap>
                    <div key={idx}>{info.place_name}</div>
                    <div>{info.address_name}</div>
                  </JustWrap>
                </>
              ))}
            </ResultSearch>
          </ModalChang>
        </PlaceModal>
      </WholeWrap>
    </>
  );
}

const WholeWrap = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
  position: relative;
`;

const PlaceModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalChang = styled.div`
  width: 350px;
  height: 500px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`;

const CloseBtn = styled.button`
  display: flex;
  margin-left: auto;
  font-size: 10px;
  justify-content: flex-end;
`;

const InputWrap = styled.div`
  margin: 10px;
`;

const ResultSearch = styled.div`
  width: 100%;
  height: 70%;
  background-color: grey;
  overflow: hidden;
  overflow-y: auto;
  overflow-x: hidden;
`;

const JustWrap = styled.div`
  margin: 10px;
`;
