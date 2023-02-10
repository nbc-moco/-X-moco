import styled from '@emotion/styled';

export const MyProfileBody = styled.div`
  width: 100%;
  height: 500px;

  display: flex;
  justify-content: center;

  background-color: #0000;
  box-shadow: 2px 2px 10px 10px #0001;
`;

export const ProfileSection = styled.div`
  width: 270px;

  margin-top: 40px;
`;

export const ProfileHeaderIcon = styled.div`
  width: 230px;

  cursor: pointer;

  display: flex;
  justify-content: flex-end;
`;

export const ProfileImageBody = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const ProfileImage = styled.img`
  border-radius: 75px;
`;

export const ProfileEditBody = styled.div`
  width: 100%;

  margin-top: 40px;
`;

export const EditNickNameInput = styled.input`
  width: 45%;

  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid black;

  font-size: 1.2rem;
  font-weight: 600;

  margin-left: 1%;

  :focus {
    outline: none;
  }
`;

export const ProfileNickNameBody = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileNickName = styled.div`
  background-color: #0000;

  font-size: 1.2rem;
  font-weight: 600;

  border: none;
  border-bottom: 0.6px solid #0009;
  outline: none;
`;

export const ProfileNickNameBtn = styled.div`
  width: 50px;
  height: 40px;

  color: #0004;

  border: 1px solid #0005;
  border-radius: 15px;
  font-weight: 600;

  cursor: pointer;
  margin-left: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NickNameCompleteBtn = styled.div`
  width: 50px;
  height: 40px;

  color: #0004;

  border: 1px solid #0005;
  border-radius: 15px;
  font-weight: 600;

  cursor: pointer;
  margin-left: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileRemoveBtnBody = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProfileRemoveBtn = styled.div`
  width: 100px;
  height: 40px;

  margin-top: 30px;
  margin-bottom: 20px;

  color: #0004;

  border: 1px solid #0005;
  border-radius: 15px;
  font-weight: 600;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileFooterBody = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  margin-top: 25px;
`;

export const ProfileCompleteBtn = styled.div`
  width: 110px;
  height: 40px;

  margin-bottom: 20px;

  color: #0004;

  border: 1px solid #0005;
  border-radius: 15px;
  font-weight: 600;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;
