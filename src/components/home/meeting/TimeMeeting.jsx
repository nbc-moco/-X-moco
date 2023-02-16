import { TimeMeetingArea, MeetingTitleBox, MeetingCardBox, TimeMeetingTitle, MeetingMoreBox } from "../../homestyle/homemeeting";
import CardSection from "../../../shared/CardSection";
import { MdExpandMore } from "react-icons/md";
import { useQueries } from "react-query";
import { getPost, getUser } from "../../../common/utils/getApi";
import { useEffect } from "react";

const TimeMeeting = () => {
    const result = useQueries([
        {
          queryKey: ['user'],
          queryFn: getUser
        },
        {
          queryKey: ['post'],
          queryFn: getPost
        }
      ]);
      const recommendTimeList = result[1].data.filter((item) =>
      item.partyTime.includes(result[0].data[0].moreInfo.u_time)
      );
      console.log('시간대맞는모임', recommendTimeList)
      useEffect(() => {
        console.log(result); // [{rune 정보, data: [], isSucces: true ...}, {spell 정보, data: [], isSucces: true ...}]
      const loadingFinishAll = result.some(result => result.isLoading);
      console.log(loadingFinishAll); // loadingFinishAll이 false이면 최종 완료
      }, [result])

    return (
        <TimeMeetingArea>
            <MeetingTitleBox>
                <TimeMeetingTitle>
                    시간대가 맞는 모임
                </TimeMeetingTitle>
                {/* <MeetingMoreBox>
                    더보기 <MdExpandMore size="16" />
                </MeetingMoreBox> */}
            </MeetingTitleBox>
            <MeetingCardBox>
                {recommendTimeList.slice(0,4).map((a, index) => (
                    <CardSection key={index} />
                ))}
            </MeetingCardBox>
        </TimeMeetingArea>
    );
};

export default TimeMeeting;