import { TechStackTitleBox, TechStackCardBox, TechStackMark, TechStackTitle } from "../../homestyle/homemeeting";
import CardSection from "../../../shared/CardSection";

const TechStackMeeting = ({ testList }) => {
    return (
        <>
            <TechStackTitleBox>
                <TechStackTitle>
                    기술 스택에 맞는 모임
                </TechStackTitle>
                <TechStackMark></TechStackMark>
            </TechStackTitleBox>
            <TechStackCardBox>
            {testList.map((a, index) => (
                <CardSection key={index} />
            ))}
            </TechStackCardBox>
        </>
    );
};

export default TechStackMeeting;