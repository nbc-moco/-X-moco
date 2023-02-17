import { MeetingArea, TechAndTimeMeetingArea } from "../../homestyle/homemeeting";
import LocationMeeting from "./LocationMeeting";
import TechStackMeeting from "./TechStackMeeting";
import TimeMeeting from "./TimeMeeting";

const HomeMeetingList = ({ recommendTechList, recommendTimeList, recommendLocationList }) => {
    return (
       <MeetingArea>
       <TechAndTimeMeetingArea>
        <TechStackMeeting recommendTechList={recommendTechList} />
        <TimeMeeting recommendTimeList={recommendTimeList} />
       </TechAndTimeMeetingArea>
       <LocationMeeting recommendLocationList={recommendLocationList} />
       </MeetingArea>
    );
};

export default HomeMeetingList;