import React, { MouseEventHandler } from 'react';
import styled from '@emotion/styled';

// 공통 alert UI
const AlertUI = (props) => {
  return (
    <AlertBody>
      <AlertBox>
        <TextBox>
          <Title>{props.title}</Title>
        </TextBox>
        <BtnBox>
          <ConfirmBtn onClick={props.onClose}>확인</ConfirmBtn>
        </BtnBox>
      </AlertBox>
    </AlertBody>
  );
};

export default AlertUI;

export const AlertBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const AlertBox = styled.div`
  width: 350px;
  height: 200px;
  border-radius: 10px;
  background-color: #fff;
  position: relative;
  bottom: 80px;
  box-shadow: 2px 2px 15px 2px #222;
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 800;
`;

export const BtnBox = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const ConfirmBtn = styled.button`
  font-size: 16px;
  font-weight: 600;
  color: #222;
  background: none;
  border: none;
  cursor: pointer;
`;
