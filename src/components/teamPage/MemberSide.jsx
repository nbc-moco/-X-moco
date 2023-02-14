import React from 'react';
import {
  MemberSidebar,
  MemberInfoTitle,
  SideWrapper,
  MemberInfoProfile,
  MemberInfoProfileImg,
  MemberInfoProfileInfo,
  MemberInfoProfileTitle,
  MemberInfoProfileName,
  MemberInfoProfilePosition,
  MembersInfoProfileTitle,
} from './style';
import { useEffect, useState } from 'react';
// 파이어베이서 파일에서 import 해온 db
import { db } from '../../common/firebase';
// db에 접근해서 데이터를 꺼내게 도와줄 친구들
import { collection, getDocs } from 'firebase/firestore';

export default function MemberSide() {
  // 이따가 users 추가하고 삭제하는거 진행을 도와줄 state
  const [users, setUsers] = useState([]);
  // db의 users 컬렉션을 가져옴
  const usersCollectionRef = collection(db, 'users');

  useEffect(() => {
    // 비동기로 데이터 받을준비
    const getUsers = async () => {
      // getDocs로 컬렉션안에 데이터 가져오기
      const data = await getDocs(usersCollectionRef);
      // users에 data안의 자료 추가. 객체에 id 덮어씌우는거
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <>
      <MemberSidebar>
        <MemberInfoTitle>멤버 정보 👀 (6)</MemberInfoTitle>
        <SideWrapper>
          <MemberInfoProfileTitle>프로필</MemberInfoProfileTitle>
          <MemberInfoProfile>
            {users.map((value) => {
              return (
                <>
                  <MemberInfoProfileImg src={value.profileImg} />
                  <MemberInfoProfileInfo>
                    <MemberInfoProfileName>{value.name}</MemberInfoProfileName>
                    <MemberInfoProfilePosition>
                      {value.role}
                    </MemberInfoProfilePosition>
                  </MemberInfoProfileInfo>
                </>
              );
            })}
          </MemberInfoProfile>
        </SideWrapper>
        <MembersInfoProfileTitle>팀원 (5)</MembersInfoProfileTitle>
        <MemberInfoProfile>
          <MemberInfoProfileImg />
          <MemberInfoProfileInfo>
            <MemberInfoProfileName>정다인</MemberInfoProfileName>
            <MemberInfoProfilePosition>멤버 </MemberInfoProfilePosition>
          </MemberInfoProfileInfo>
        </MemberInfoProfile>
      </MemberSidebar>
    </>
  );
}
