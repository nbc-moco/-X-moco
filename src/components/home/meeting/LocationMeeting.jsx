import { MeetingTitleBox, MeetingMoreBox, LocationTitle, LocationMeetingArea, LocationMeetingCardBox } from "../../homestyle/homemeeting";
import CardSection from "../../../shared/CardSection";
import { MdExpandMore } from "react-icons/md";
import { useQueries } from "react-query";
import { getPost, getUser } from "../../../common/utils/getApi";
import { useEffect } from "react";

const LocationMeeting = ({ recommendLocationList }) => {
    // const result = useQueries([
    //     {
    //       queryKey: ['user'],
    //       queryFn: getUser
    //     },
    //     {
    //       queryKey: ['post'],
    //       queryFn: getPost
    //     }
    //   ]);
    //   const recommendLocationList = result[1].data.filter((item) =>
    //   item.partyLocation.includes(result[0].data[0].moreInfo.u_location)
    //   );
    //   console.log('추천장소', recommendLocationList)
    //   useEffect(() => {
    //     console.log(result); // [{rune 정보, data: [], isSucces: true ...}, {spell 정보, data: [], isSucces: true ...}]
    //   const loadingFinishAll = result.some(result => result.isLoading);
    //   console.log(loadingFinishAll); // loadingFinishAll이 false이면 최종 완료
    //   }, [result])
    

    return (
        <>
            <LocationMeetingArea>
            <MeetingTitleBox>
                <LocationTitle>
                    지역이 맞는 모임
                </LocationTitle>
                {/* <MeetingMoreBox>
                    더보기 <MdExpandMore size="16" />
                </MeetingMoreBox> */}
            </MeetingTitleBox>
            <LocationMeetingCardBox>
            {recommendLocationList.slice(0,4).map((item) => (
                <CardSection 
                    key={item.id}
                    item={item}
                />
            ))}
            </LocationMeetingCardBox>
            </LocationMeetingArea>
        </>
    );
};

export default LocationMeeting;