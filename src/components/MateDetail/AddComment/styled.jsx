import styled from '@emotion/styled';
// import { BsFillBookmarkFill } from 'react-icons/bs';
import { colors } from '../../../common/colors';

export const AddCommentListAll = styled.div`
  display: flex;
`;

export const AddCommentListWrap = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid ${colors.PURPLE};
  border-radius: 10px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const AddCommentListTwo = styled.div`
  width: 100%;
`;

export const AddCommentPlusGit = styled.div``;

export const AddNickName = styled.div`
  width: 6%;
  margin-left: 2%;
  margin-top: 2%;
  font-weight: 500;
`;

export const AddCommentText = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
`;

export const AddCommentDiv = styled.div`
  display: flex;
  align-items: center;
  min-width: 90px;
  font-size: 0.9rem;
  font-weight: 700;
  justify-content: right;
`;

export const AddInputDiv = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 1%;
`;

export const AddCommentBtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2%;
`;

export const AddCommentBtn = styled.button`
  width: 90px;
  height: 40px;
  cursor: pointer;
  background-color: #fff;
  color: ${colors.PURPLE};
  border: 2px solid ${colors.PURPLE};
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 600;
  :hover {
    background-color: ${colors.PURPLE};
    color: #fff;
    border-radius: 5px;
    border: none;
  }
`;
