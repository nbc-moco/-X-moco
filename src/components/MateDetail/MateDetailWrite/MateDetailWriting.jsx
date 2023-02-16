import { getDoc, where } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { storage } from '../../../common/firebase';
import {
  GroupWrap,
  GroupHeader,
  GroupUserInfo,
  GroupImg,
  GroupUserId,
  GroupBox,
  GroupPerson,
  UserHr,
} from './MateDetailWritingstyle';

const MateDetailWriting = () => {
  return (
    <GroupWrap>
      <GroupHeader>
        테스트
        {/* {partyPostTitle} */}
      </GroupHeader>
      <GroupUserInfo>
        <GroupImg />
        <GroupUserId>
          테스트
          {/* {partyName} */}
        </GroupUserId>
      </GroupUserInfo>
      <UserHr />
      <GroupBox>
        <GroupPerson>
          테스트
          {/* {postId} */}
        </GroupPerson>
      </GroupBox>
    </GroupWrap>
  );
  console.log();
};

export default MateDetailWriting;
