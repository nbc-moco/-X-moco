import { MeetingCard, MeetingCardBox, MeetingMark, TimeMeetingArea, TimeMeetingTitle, MeetingTitleBox } from "../../homestyle/homemeeting";

const TimeMeeting = ({ testList }) => {
    return (
        <TimeMeetingArea>
            <MeetingTitleBox>
                <TimeMeetingTitle>
                    시간대에 맞는 모임
                </TimeMeetingTitle>
                <MeetingMark />
            </MeetingTitleBox>
            <MeetingCardBox>
                {testList.map((a, index) => (
                    <MeetingCard key={index} />
                ))}
            </MeetingCardBox>
        </TimeMeetingArea>
    );
};

export default TimeMeeting;