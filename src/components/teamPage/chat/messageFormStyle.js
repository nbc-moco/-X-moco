import styled from '@emotion/styled';

export const ChatFormSection = styled.div`
  width: 100%;
  height: 120px;

  display: flex;
`;

export const ChatInputBody = styled.div`
  width: 90%;
  height: 100%;
`;

export const ChatInput = styled.input`
  width: 100%;
  height: 90%;

  padding-left: 5px;

  font-size: 1.3rem;

  border: none;
  border-radius: 20px;

  :focus-visible {
    outline: none;
  }
`;

export const ChatBtn = styled.div`
  cursor: pointer;
`;
