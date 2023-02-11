import {
  NewMeetingArea,
  NewMeetingBox,
  NewMeetingCard,
  NewMeetingCardBox,
  NewMeetingMark,
  NewMeetingTitle,
  NewMeetingTitleBox,
} from '../../../homestyle/homenewmeeting';

const HomeNewMeetingList = ({ testList }) => {
  return (
    <NewMeetingArea>
      <NewMeetingBox>
        <NewMeetingTitleBox>
          <NewMeetingTitle>새로 생긴 모임 리스트</NewMeetingTitle>
          <NewMeetingMark />
        </NewMeetingTitleBox>
        <NewMeetingCardBox>
          {testList.map((a, index) => (
            <NewMeetingCard key={index} />
          ))}
        </NewMeetingCardBox>
      </NewMeetingBox>
    </NewMeetingArea>
  );
};

export default HomeNewMeetingList;
