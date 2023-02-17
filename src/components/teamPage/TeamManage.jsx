import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import styled from '@emotion/styled';

export default function TeamManage() {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <Social
        onClick={() => {
          setShowOptions(!showOptions);
        }}
      >
        <DropdownOptions />
      </Social>
      {showOptions === true ? (
        <>
          <DropdownOption>
            <SharePh>모임 수정하기</SharePh>
            <SharePh>모임 삭제하기</SharePh>
          </DropdownOption>
        </>
      ) : null}
    </>
  );
}

const Social = styled.span`
  display: block;
`;

const DropdownOptions = styled(BsThreeDots)`
  font-size: 20px;
  margin-top: 1rem;
  color: black;
  cursor: pointer;
`;

const DropdownOption = styled.div`
  position: absolute;
  z-index: 1; /*다른 요소들보다 앞에 배치*/
  font-weight: 400;
  background-color: #f9f9f9;
  min-width: 150px;
  border-radius: 8px;
  padding: 15px;
  top: 100px;
`;

const SharePh = styled.div`
  font-size: 15px;
  font-weight: 500;
`;
