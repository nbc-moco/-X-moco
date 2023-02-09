import styled from '@emotion/styled';

export const LoginBody = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled.div`
  width: 500px;
  height: 600px;

  border-radius: 30px;

  background-color: #0000;
  box-shadow: 2px 2px 10px 10px #0004;
`;

export const LoginTitleLogo = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginTitle = styled.div`
  width: 100%;
  height: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-weight: 600;

  margin-top: 30px;
`;

export const LoginInputBody = styled.div`
  width: 100%;
  height: 150px;

  margin-top: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginInputSection = styled.div``;

export const EmailBody = styled.div`
  width: 380px;
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EmailText = styled.div`
  font-weight: 600;

  margin-left: 13px;
`;

export const LoginEmailInput = styled.input`
  width: 300px;
  height: 35px;

  font-size: 20px;

  border-radius: 15px;

  border: 1px solid rgb(150, 150, 150);

  :focus-visible {
    outline: none;
  }

  padding-left: 8px;
`;

export const PasswordText = styled.div`
  font-weight: 600;
`;

export const PasswordBody = styled.div`
  width: 380px;
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;
`;

export const LoginPasswordInput = styled.input`
  width: 300px;
  height: 35px;

  font-size: 20px;

  border-radius: 15px;
  border: 1px solid rgb(150, 150, 150);

  :focus-visible {
    outline: none;
  }

  padding-left: 8px;
`;

export const WarnigTextBody = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  margin-top: 25px;
`;

export const WarnigText = styled.div`
  color: red;
`;

export const LoginLogo = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 80px;

  gap: 50px;
`;

export const GoogleLogo = styled.div`
  cursor: pointer;
`;

export const GithubLogo = styled.div`
  cursor: pointer;
`;

export const LoginLouteBody = styled.div`
  width: 100%;

  margin-top: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 40px;
`;

export const LoginBtn = styled.div`
  width: 120px;
  height: 40px;

  background-color: #567189;
  color: white;
  border-radius: 15px;

  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const LouteSignUpPageBtn = styled.div`
  width: 120px;
  height: 40px;

  background-color: #567189;
  color: white;
  border-radius: 15px;

  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const ToggleEmailBtn = styled.div`
  width: 100%;
  height: 35px;

  color: #567189;
  cursor: pointer;

  display: flex;
  justify-content: center;

  margin-top: 80px;

  font-size: 20px;
`;

export const ToggleEmailBack = styled.div`
  width: 100%;
  height: 35px;

  color: #567189;
  cursor: pointer;

  display: flex;
  justify-content: center;

  margin-top: 30px;

  font-size: 20px;
`;
