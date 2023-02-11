import { MeetingArea, TimeAndLocationMeetingArea } from "../../homestyle/homemeeting";
import LocationMeeting from "./LocationMeeting";
import TechStackMeeting from "./TechStackMeeting";
import TimeMeeting from "./TimeMeeting";

const HomeMeetingList = ({ testList }) => {
    return (
       <MeetingArea>
       <TechStackMeeting testList={testList} />
       <TimeAndLocationMeetingArea>
        <TimeMeeting testList={testList} />
        <LocationMeeting testList={testList} />
       </TimeAndLocationMeetingArea>
       </MeetingArea>
    );
};

export default HomeMeetingList;