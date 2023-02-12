import styled from "@emotion/styled";

/* HomeMeetingList */
const MeetingArea = styled.div`
    width: 1180px;
    height: 1106px;
    margin: 0 auto;
`
const TechStackTitleBox = styled.div`
    width: 247px;
    height: 32px;
    display: flex;
    margin-bottom: 30px;
`
const TechStackTitle = styled.div`
    width: 204px;
    height: 29px;
    font-size: 20px;
    font-weight: 600;
    margin-right: 10px;
`
const TechStackMark = styled.div`
    width: 32px;
    height: 32px;
    border: 1px solid;
`
const TechStackCardBox = styled.div`
    height: 321px;
    width: 1180px;
    display: flex;
`
/* TimeMeeting + LocationMeeting */
const TimeAndLocationMeetingArea = styled.div`
    width: 1180px;
    height: 555px;
    display: flex;
    gap: 0 72px;
`
/* TimeMeeting */
const TimeMeetingArea = styled.div`
    height: 555px;
    width: 554px;
`
const TimeMeetingTitle = styled.div`
    width: 178px;
    height: 29px;
    font-size: 20px;
    font-weight: 600;
    margin-right: 10px;
`
/* LocationMeeting */
const LocationMeetingArea = styled.div`
    height: 555px;
    width: 554px;
`
const LocationMeetingTitle = styled.div`
    width: 157px;
    height: 29px;
    font-size: 20px;
    font-weight: 600;
    margin-right: 10px;
`
/* Meeting 부분 재사용 */
const MeetingTitleBox = styled.div`
    width: 220px;
    height: 32px;
    display: flex;
    margin-bottom: 27px;
`
const MeetingMark = styled.div`
    width: 32px;
    height: 32px;
    border: 1px solid;
`
const MeetingCardBox = styled.div`
    width: 554px;
    height: 496px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px 16px;
`
const MeetingCard = styled.div`
    width: 269px;
    height: 240px;
    border: 1px solid;
`


export { MeetingArea, TechStackTitleBox, TechStackTitle, TechStackMark, TechStackCardBox, TimeAndLocationMeetingArea, TimeMeetingArea, TimeMeetingTitle, LocationMeetingArea, LocationMeetingTitle, MeetingTitleBox,  MeetingMark, MeetingCardBox, MeetingCard };