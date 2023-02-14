import { MeetingArea, TechAndTimeMeetingArea } from "../../homestyle/homemeeting";
import LocationMeeting from "./LocationMeeting";
import TechStackMeeting from "./TechStackMeeting";
import TimeMeeting from "./TimeMeeting";

const HomeMeetingList = ({ testList }) => {
    return (
       <MeetingArea>
       <TechAndTimeMeetingArea>
        <TechStackMeeting testList={testList} />
        <TimeMeeting testList={testList} />
       </TechAndTimeMeetingArea>
       <LocationMeeting testList={testList} />
       </MeetingArea>
    );
};

export default HomeMeetingList;