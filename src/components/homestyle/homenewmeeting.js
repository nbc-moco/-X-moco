import styled from "@emotion/styled";

/* HomeNewMeetingList */
const NewMeetingArea = styled.div`
    width: 1200px;
    height: 465px;
    margin: 0 auto;
    background-color: #f2f2f2;
`
const NewMeetingBox = styled.div`
    margin: 0 10px;
`
const NewMeetingTitleBox = styled.div`
    width: 246px;
    height: 32px;
    display: flex;
    margin-bottom: 34px;
`
const NewMeetingTitle = styled.div`
    width: 204px;
    height: 29px;
    font-size: 20px;
    font-weight: 600;
    margin-right: 10px;
`
const NewMeetingMark = styled.div`
    width: 32px;
    height: 32px;
    border: 1px solid;
`
const NewMeetingCardBox = styled.div`
    width: 1200px;
    height: 240px;
    display: flex;
    gap: 0 20px;
`
const NewMeetingCard = styled.div`
    width: 280px;
    height: 240px;
    border: 1px solid;
`

export { NewMeetingArea, NewMeetingBox, NewMeetingTitleBox, NewMeetingTitle, NewMeetingMark, NewMeetingCardBox, NewMeetingCard };