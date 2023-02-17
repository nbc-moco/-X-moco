import { MeetingCardBox, MeetingMoreBox, TechStackMeetingArea, MeetingTitleBox, TechStackMeetingTitle } from "../../homestyle/homemeeting";
import CardSection from "../../../shared/CardSection";
import { MdExpandMore } from "react-icons/md";
import { useQueries } from "react-query";
import { getPost, getUser } from "../../../common/utils/getApi";
import { useEffect } from "react";

const TechStackMeeting = ({ recommendTechList }) => {
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
    //   useEffect(() => {
    //     console.log(result); // [{rune 정보, data: [], isSucces: true ...}, {spell 정보, data: [], isSucces: true ...}]
    //   const loadingFinishAll = result.some(result => result.isLoading);
    //   console.log(loadingFinishAll); // loadingFinishAll이 false이면 최종 완료
    //   }, [result])
    return (
        <TechStackMeetingArea>
            <MeetingTitleBox>
                <TechStackMeetingTitle>
                    기술 스택에 맞는 모임
                </TechStackMeetingTitle>
                {/* <MeetingMoreBox>
                    더보기 <MdExpandMore size="16" />
                </MeetingMoreBox> */}
            </MeetingTitleBox>
            <MeetingCardBox>
                {recommendTechList.slice(0,4).map((item) => (
                    <CardSection 
                        key={item.id} 
                        item={item}
                    />
                ))}
            </MeetingCardBox>
        </TechStackMeetingArea>
    );
};

export default TechStackMeeting;