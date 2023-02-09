import styled from "@emotion/styled";
import HomePlaceCard from "./HomePlaceCard";

const HomePlace = ({ testList }) => {
    return (
        <Wrapper>
            <HomePlaceCard testList={testList} />
        </Wrapper>
    )
}

export default HomePlace;

const Wrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    background-color: #9e8e8e;
    display: flex;
    flex-wrap: wrap;
    gap: 40px 20px;
`