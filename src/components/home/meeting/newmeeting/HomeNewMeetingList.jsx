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

const HomeNewMeetingList = ({ testList }) => {
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
          {testList.slice(0,4).map((a, index) => (
            <CardSection key={index} />
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
