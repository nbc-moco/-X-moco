import React from 'react';
import MainPanel from '../../components/chat/chatMain/MainPanel';
import SidePanel from '../../components/chat/chatSide/SidePanel';

const TestTeam = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <SidePanel />
      </div>
      <div>
        <MainPanel />
      </div>
    </div>
  );
};

export default TestTeam;
