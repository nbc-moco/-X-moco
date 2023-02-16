import styled from '@emotion/styled';

export const HeaderBody = styled.div`
  width: 100%;
  height: 80px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;
`;

export const HeaderInfoBody = styled.div`
  width: 1180px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoAndMateBox = styled.div`
  width: 241px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.div`
  cursor: pointer;
  font-size: 30px;
`;

export const MyCodingMate = styled.div`
  cursor: pointer;
  font-size: 20px;
`;

export const TeamAndLoginBox = styled.div`
  width: 330px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MakeTeam = styled.button`
  width: 114px;
  height: 40px;
  border-radius: 20px;
`;

export const HeaderIcon = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid;
  cursor: pointer;
`;

export const HeaderRoute = styled.div`
  display: flex;
`;

export const MateRoute = styled.div`
  margin-right: 50px;
  cursor: pointer;
`;

export const LoginRoute = styled.div`
  cursor: pointer;
`;

export const NavigateMypage = styled.div`
  margin-right: 25px;
  cursor: pointer;
`;

export const HeaderImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const HeaderDropDownListBox = styled.div`
  width: 250px;
  height: 400px;

  margin-top: 10px;

  border-radius: 5px;
  background-color: white;
  box-shadow: 2px 2px 10px 10px #0001;

  z-index: 999;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 10%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-bottom-color: white;
    border-top: 0;
    margin-left: -22px;
    margin-top: -13px;

    z-index: 5;
  }
`;

export const HeaderImageBox = styled.div`
  width: 100%;
  height: 150px;

  text-align: center;

  margin-top: 40px;
`;

export const HeaderImageText = styled.div`
  margin-top: 20px;

  font-size: 1.2rem;
  font-weight: 550;
`;

export const HeaderDropDownListSection = styled.ul`
  width: 100%;
  height: 200px;
`;

export const DropDownListBody = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: aliceblue;
  }

  margin-top: 20px;
  cursor: pointer;
`;

export const HeaderDropDownList = styled.li`
  font-size: 1.3rem;

  list-style: none;
`;
