import { LocationMeetingArea, MeetingMark, LocationMeetingTitle, MeetingTitleBox, MeetingCardBox, MeetingCard } from "../../homestyle/homemeeting";

const LocationMeeting = ({ testList }) => {
    return (
        <LocationMeetingArea>
            <MeetingTitleBox>
                <LocationMeetingTitle>
                    지역에 맞는 모임
                </LocationMeetingTitle>
                <MeetingMark />
            </MeetingTitleBox>
            <MeetingCardBox>
                {testList.map((a, index) => (
                    <MeetingCard key={index} />
                ))}
            </MeetingCardBox>
        </LocationMeetingArea>
    );
};

export default LocationMeeting;