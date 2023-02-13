import { MeetingTitleBox, MeetingMoreBox, LocationTitle, LocationMeetingArea, LocationMeetingCardBox } from "../../homestyle/homemeeting";
import CardSection from "../../../shared/CardSection";
import { MdExpandMore } from "react-icons/md";

const LocationMeeting = ({ testList }) => {
    return (
        <>
            <LocationMeetingArea>
            <MeetingTitleBox>
                <LocationTitle>
                    지역이 맞는 모임
                </LocationTitle>
                <MeetingMoreBox>
                    더보기 <MdExpandMore size="16" />
                </MeetingMoreBox>
            </MeetingTitleBox>
            <LocationMeetingCardBox>
            {testList.map((a, index) => (
                <CardSection key={index} />
            ))}
            </LocationMeetingCardBox>
            </LocationMeetingArea>
        </>
    );
};

export default LocationMeeting;