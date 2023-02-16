import styled from '@emotion/styled';

export const CommentContainer = styled.div`
  margin-top: 80px;
`;

export const CommentContainHeader = styled.p`
  width: 97px;
  height: 29px;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  margin-bottom: 30px;
`;

export const ListContainer = styled.div``;

export const CommentNickname = styled.div`
  font-weight: 600;
`;

export const CommentUserName = styled.div`
  font-size: 1.5rem;
  color: #555;
  margin-right: 1.5%;
  margin-left: 1.5%;
  margin-bottom: 0.5%;
`;

export const CommentTime = styled.div`
  color: #555;
  margin-right: 1.5%;
`;

export const ListTextSection = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 900px) {
    width: 350px;
  }
  @media screen and (max-width: 780px) {
    width: 580px;
  }
`;

export const CommentText = styled.div`
  font-size: 1rem;
  font-weight: 400;
  margin-left: 1%;
`;

export const CommentUserInput = styled.input`
  width: 90%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid black;
  font-size: 1rem;
  margin-left: 1%;
  :focus {
    outline: none;
  }
`;

export const CommentTextIcon = styled.div`
  width: 7%;
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const CommentIconBody = styled.div`
  width: 25%;
  margin-right: 15%;
`;

export const UpdateDeleteBody = styled.div`
  width: 50%;
  margin-right: 25%;
`;

export const CommentDeleteBtn = styled.button`
  width: 80px;
  height: 30px;
  background-color: #fff;
  border: 2px solid #ddd;
  color: #222222;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 600;
  display: block;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  :hover {
    background-color: #222222;
    color: #fff;
    border-radius: 5px;
    border: none;
  }
`;

export const CommentUpdateBtn = styled(CommentDeleteBtn)``;
export const CommentPoliceBtn = styled(CommentDeleteBtn)``;

export const NoneDiv = styled.div`
  display: none;
`;
