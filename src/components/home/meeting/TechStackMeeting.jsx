import { MeetingCardBox, MeetingMoreBox, TechStackMeetingArea, MeetingTitleBox, TechStackMeetingTitle } from "../../homestyle/homemeeting";
import CardSection from "../../../shared/CardSection";
import { MdExpandMore } from "react-icons/md";

const TechStackMeeting = ({ testList }) => {
    return (
        <TechStackMeetingArea>
            <MeetingTitleBox>
                <TechStackMeetingTitle>
                    기술 스택에 맞는 모임
                </TechStackMeetingTitle>
                <MeetingMoreBox>
                    더보기 <MdExpandMore size="16" />
                </MeetingMoreBox>
            </MeetingTitleBox>
            <MeetingCardBox>
                {testList.map((a, index) => (
                    <CardSection key={index} />
                ))}
            </MeetingCardBox>
        </TechStackMeetingArea>
    );
};

export default TechStackMeeting;