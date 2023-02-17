import CardSection from '../../../../shared/CardSection';
import {
  NewMeetingArea,
  NewMeetingArrow,
  NewMeetingCardBox,
  NewMeetingCardWrap,
  NewMeetingListBox,
  NewMeetingTitle,
  NewMeetingTitleBox,
} from '../../../homestyle/homenewmeeting';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useQueries } from 'react-query';
import { getPost, getUser } from '../../../../common/utils/getApi';
import { useEffect } from 'react';

const HomeNewMeetingList = ({ postList }) => {
  // const result = useQueries([
  //   {
  //     queryKey: ['user'],
  //     queryFn: getUser
  //   },
  //   {
  //     queryKey: ['post'],
  //     queryFn: getPost
  //   }
  // ]);
  // useEffect(() => {
  //   console.log(result); // [{rune 정보, data: [], isSucces: true ...}, {spell 정보, data: [], isSucces: true ...}]
  // const loadingFinishAll = result.some(result => result.isLoading);
  // console.log(loadingFinishAll); // loadingFinishAll이 false이면 최종 완료
  // }, [result])

  return (
    <NewMeetingArea>
      <NewMeetingListBox>
        <NewMeetingTitleBox>
          <NewMeetingTitle>새로 생긴 모임</NewMeetingTitle>
        </NewMeetingTitleBox>
        <NewMeetingCardWrap>
          <NewMeetingArrow>
            <AiOutlineArrowLeft size="36" />
          </NewMeetingArrow>
        <NewMeetingCardBox>
          {postList.slice(0,4).map((item) => (
            <CardSection 
              key={item.id} 
              item={item}
              />
          ))}
        </NewMeetingCardBox>
        <NewMeetingArrow>
        <AiOutlineArrowRight size="36" />
        </NewMeetingArrow>
        </NewMeetingCardWrap>
      </NewMeetingListBox>
    </NewMeetingArea>
  );
};

export default HomeNewMeetingList;
