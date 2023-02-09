import React from 'react';
import useMoveScroll from '../../hooks/useMoveScroll';
import { TabContainer, Tabs, TabTitle } from './style';

export default function DetailInfo() {
  const TabsName = {
    0: useMoveScroll('장소 소개'),
    1: useMoveScroll('장소 위치'),
    2: useMoveScroll('장소 리뷰'),
    3: useMoveScroll('진행중인 모각코'),
    length: 4,
  };

  return (
    <>
      <TabContainer>
        <Tabs>
          {Array.from(TabsName).map((tab, idx) => {
            console.log(tab);
            return (
              <TabTitle key={idx} onClick={tab.onMoveToElement}>
                {tab.name}
              </TabTitle>
            );
          })}
        </Tabs>
      </TabContainer>
      <div ref={TabsName[0].element} style={{ height: '100vh' }}>
        장소 소개
      </div>
      <div ref={TabsName[1].element} style={{ height: '100vh' }}>
        장소 위치
      </div>
      <div ref={TabsName[2].element} style={{ height: '100vh' }}>
        장소 리뷰
      </div>
      <div ref={TabsName[3].element} style={{ height: '100vh' }}>
        진행중인 모각코
      </div>
      <div id="my" style={{ width: '100%', height: '400px' }} />
    </>
  );

  //   const TabsName = [
  //     { '장소 소개': useMoveScroll('장소 소개') },
  //     { '장소 위치': useMoveScroll('장소 위치') },
  //     { '장소 리뷰': useMoveScroll('장소 리뷰') },
  //     { '진행중인 모각코': useMoveScroll('진행중인 모각코') },
  //   ];
  //   // console.log(TabsName[0].element);
  //   return (
  //     <>
  //       <TabContainer>
  //         <Tabs>
  //           {TabsName.map((tab) => {
  //             console.log(Object.values(tab)[0].onMoveToElement);
  //             return (
  //               <TabTitle onClick={Object.values(tab)[0].onMoveToElement}>
  //                 {Object.keys(tab)[0]}
  //               </TabTitle>
  //             );
  //           })}
  //         </Tabs>
  //       </TabContainer>
  //       <div ref={TabsName[0]['장소 소개'].element} style={{ height: '100vh' }}>
  //         장소 소개
  //       </div>
  //       <div ref={TabsName[1]['장소 위치'].element} style={{ height: '100vh' }}>
  //         장소 위치
  //       </div>
  //       <div ref={TabsName[2]['장소 리뷰'].element} style={{ height: '100vh' }}>
  //         장소 리뷰
  //       </div>
  //       <div
  //         ref={TabsName[3]['진행중인 모각코'].element}
  //         style={{ height: '100vh' }}
  //       >
  //         진행중인 모각코
  //       </div>
  //     </>
  //   );
}
