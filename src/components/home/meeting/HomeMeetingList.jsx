import { MeetingArea, TechAndTimeMeetingArea } from "../../homestyle/homemeeting";
import LocationMeeting from "./LocationMeeting";
import TechStackMeeting from "./TechStackMeeting";
import TimeMeeting from "./TimeMeeting";

const HomeMeetingList = () => {
    return (
       <MeetingArea>
       <TechAndTimeMeetingArea>
        <TechStackMeeting />
        <TimeMeeting />
       </TechAndTimeMeetingArea>
       <LocationMeeting />
       </MeetingArea>
    );
};

export default HomeMeetingList;