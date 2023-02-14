import styled from '@emotion/styled';
import { BsFillBookmarkFill } from 'react-icons/bs';
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

export const AddGitLink = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const AddGitText = styled.div`
  display: flex;
  align-items: center;
  min-width: 90px;
  font-size: 0.9rem;
  font-weight: 700;
  justify-content: right;
`;

export const AddGitInputDiv = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 1%;
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

export const AddIconBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: none;
  cursor: pointer;
  background-color: transparent;
  width: 50px;
  font-size: 30px;
`;

export const AddInputGithub = styled.input`
  width: 100%;
  border: 1px solid rgb(150, 150, 150);
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 400;
  padding: 4px 8px;
  box-sizing: border-box;
  :focus-visible {
    outline: none;
  }
`;

export const AddInputContent = styled(AddInputGithub)``;

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

export const BookMark = styled(BsFillBookmarkFill)`
  :hover {
    color: red;
  }
`;
