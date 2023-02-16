import { TimeMeetingArea, MeetingTitleBox, MeetingCardBox, TimeMeetingTitle, MeetingMoreBox } from "../../homestyle/homemeeting";
import CardSection from "../../../shared/CardSection";
import { MdExpandMore } from "react-icons/md";

const TimeMeeting = ({ testList }) => {
    return (
        <TimeMeetingArea>
            <MeetingTitleBox>
                <TimeMeetingTitle>
                    시간대가 맞는 모임
                </TimeMeetingTitle>
                {/* <MeetingMoreBox>
                    더보기 <MdExpandMore size="16" />
                </MeetingMoreBox> */}
            </MeetingTitleBox>
            <MeetingCardBox>
                {testList.slice(0,4).map((a, index) => (
                    <CardSection key={index} />
                ))}
            </MeetingCardBox>
        </TimeMeetingArea>
    );
};

export default TimeMeeting;