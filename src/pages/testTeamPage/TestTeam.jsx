import React from 'react';
import { authService } from '../../common/firebase';
import MainPanel from '../../components/chat/chatMain/MainPanel';
import SidePanel from '../../components/chat/chatSide/SidePanel';

const TestTeam = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <SidePanel key={authService.currentUser?.uid} />
      </div>
      <div>
        <MainPanel key={authService.currentUser?.uid} />
      </div>
    </div>
  );
};

export default TestTeam;
