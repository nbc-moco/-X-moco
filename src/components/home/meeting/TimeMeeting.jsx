import {
  TimeMeetingArea,
  MeetingTitleBox,
  MeetingCardBox,
  TimeMeetingTitle,
  MeetingMoreBox,
} from '../../homestyle/homemeeting';
import CardSection from '../../../shared/CardSection';
import { MdExpandMore } from 'react-icons/md';
import { useQueries, useQuery } from 'react-query';
import { getPost, getUser } from '../../../common/utils/getApi';
import { useEffect, useState } from 'react';

const TimeMeeting = ({ recommendTimeList }) => {
  // const [recommendTimeList, setRecommendTimeList] = useState([]);
  
  
//   useEffect(() => {
//     getUser();
//     getPost();
//   }, [])
  
  // const result = useQueries([
  //   {
  //     queryKey: ['user'],
  //     queryFn: getUser,
  //   },
  //   {
  //     queryKey: ['post'],
  //     queryFn: getPost,
  //   },
  // ]);

//   useEffect(() => {
//     if (!result)
//     return;
    
//   }, [result])
//   console.log('시간대맞는모임', recommendTimeList);
  // useEffect(() => {
  //   console.log(result); // [{rune 정보, data: [], isSucces: true ...}, {spell 정보, data: [], isSucces: true ...}]
  //   const loadingFinishAll = result.some((result) => result.isLoading);
  //   console.log(loadingFinishAll); // loadingFinishAll이 false이면 최종 완료
  //   // if (loadingFinishAll) return;
    
  //   // const newrecommendTimeList = result[1].data?.filter((item) =>
  //   // item.partyTime.includes(result[0].data[0].moreInfo.u_time)
  //   // );
  //   // setRecommendTimeList(newrecommendTimeList);
  //   //무한루프 도는 이유 모르겠음
  // }, [result]);

  return (
    <TimeMeetingArea>
        {/* {result[0].isLoading && 'Loading...'}
        {result[0].isError && 'error'} */}
      <MeetingTitleBox>
        <TimeMeetingTitle>시간대가 맞는 모임</TimeMeetingTitle>
        {/* <MeetingMoreBox>
                    더보기 <MdExpandMore size="16" />
                </MeetingMoreBox> */}
      </MeetingTitleBox>
      <MeetingCardBox>
        {recommendTimeList && recommendTimeList.slice(0, 4).map((item) => (
          <CardSection 
            key={item.id} 
            item={item}
            />
        ))}
      </MeetingCardBox>
    </TimeMeetingArea>
  );
};

export default TimeMeeting;
