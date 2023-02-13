import styled from "@emotion/styled";

const HomePlaceDescBox = () => {
    return (
        <CardWrapper>
            <ImageBox>
              <Image src="https://i.ytimg.com/vi/bKvF710kS2Q/maxresdefault.jpg" />
              <BookMark src={require("../../assets/emptybookmark.png")} />
            </ImageBox>
            <PlaceDescBox>
                <ShopTag>
                <div>#집중최고 #조용</div>
                <div>서울 광진구</div>
                </ShopTag>
                <PlaceTitle>
                    빈티지가구 + 홈무드 스터디룸
                </PlaceTitle>
                <PlaceDesc>
                    홈무드 스터디룸으로 모임하기 좋아요 홈무드 스터디룸으로 모임하기 좋아요
                </PlaceDesc>
            </PlaceDescBox>
        </CardWrapper>
    );
};

export default HomePlaceDescBox;

const CardWrapper = styled.div`
  width: 285px;
  height: 300px;
  background-color: #d9d9d9;
`;
const ImageBox = styled.div`
  height: 190px;
  width: 285px;
  background-color: #465f69;
  text-align: center;
  position: relative;
`;
const Image = styled.img`
  height: 190px;
  width: 285px;
  object-fit: fill;
`
const BookMark = styled.img`
  width: 48px;
  height: 48px;
  position: absolute;
  bottom: 0;
  right: 0;
`
const PlaceDescBox = styled.div`
  width: 285px;
  height: 110px;
  background-color: white;
  position: relative;
`
const ShopTag = styled.div`
    height: 12px;
    font-size: 10px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    padding-top: 13px;
`
const PlaceTitle = styled.div`
    height: 19px;
    font-size: 16px;
    font-weight: 600;
    position: absolute;
    top: 35px;
`
const PlaceDesc = styled.div`
    width: 285px;
    height: 52px;
    position: absolute;
    bottom: 0;
    font-size: 14px;
    font-weight: 400;
`