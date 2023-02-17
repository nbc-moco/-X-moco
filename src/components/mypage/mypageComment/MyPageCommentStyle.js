import styled from '@emotion/styled';

export const MyCommentBody = styled.div`
  margin-top: 100px;
`;
export const MyCommetTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;
export const MyCommentList = styled.div`
  margin-top: 25px;
`;

// MyComment 부분

export const MyCommentsBox = styled.div`
  width: 100%;
  height: 130px;

  border-radius: 10px 10px 0px 0px;
  border-bottom: 1px solid #0005;

  padding: 10px;

  cursor: pointer;

  :hover {
    background-color: #fdfcfc;
  }
`;

export const MyCommentOfComment = styled.div`
  width: 100%;
  height: 50px;

  font-size: 1.5rem;
  font-weight: 500;
`;

export const MyCommentDate = styled.div`
  width: 100%;
  height: 30px;

  color: #0006;
`;

export const MyCommentCommentTitle = styled.div`
  width: 100%;
  height: 30px;

  font-size: 1.2rem;
  font-weight: 400;

  color: #0009;
`;
