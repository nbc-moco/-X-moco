import styled from "@emotion/styled";
import Slider from "react-slick";

/* HomeBanner */
const BannerContainer = styled.div`
    background-color: #D9D9D9;
    height: 300px;
    width: 100%;
`
const SliderArea = styled.div`
    width: 1180px;
    height: 300px;
    margin: 0 auto;
`
const StyledSlider = styled(Slider)`
    height: 100%;
    width: 100%;
    position: relative;
    .slick-prev::before,
    .slick-next::before {
        opacity: 0;
        display: none;
    }
    /* display: flex;
    justify-content: center;
    align-items: center; */
`
const Pre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 3%;
  z-index: 3;
`;
const NextTo = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 3%;
  z-index: 3;
`;
const Banner = styled.div`
    width: 100%;
    height: 300px;
    background-color: gray;
    text-align: center;
    font-size: 50px;
    flex-wrap: wrap;
`
/* HomeGuideText */
const GuideContainer = styled.div`
    height: 278px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const GuideText = styled.div`
    width: 364px;
    height: 88px;
    font-size: 30px;
    font-weight: 500;
    text-align: center;
`

export { BannerContainer, SliderArea, StyledSlider, Pre, NextTo, Banner, GuideContainer, GuideText };