import { Banner, BannerContainer, NextTo, Pre, SliderArea, StyledSlider } from "../homestyle/homebanner";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import Slider from "react-slick";

const HomeBanner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: (
            <NextTo>
                <BsFillArrowRightCircleFill />
            </NextTo>
        ),
        prevArrow: (
            <Pre>
                <BsFillArrowLeftCircleFill />
            </Pre>
        )
    }
    return (
        <BannerContainer>
            <SliderArea>
            <Slider {...settings}>
            <Banner>Slide 1</Banner>
            <Banner>Slide 2</Banner>
            <Banner>Slide 3</Banner>
            <Banner>Slide 4</Banner>
            </Slider>
            </SliderArea>
        </BannerContainer>
    )
};

export default HomeBanner;