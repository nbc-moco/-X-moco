import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from '@emotion/styled';

const HomeBanner = () => {
  const settings = {
    // dots: true,
    infinite: true,
    // speed: 3000,
    slideToShow: 1,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 3000,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <Image src="https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg" />
        </div>
        <div>
          <Image src="https://m.young.hyundai.com:444/upload/CMS_NEWS_IMAGE/2020/10/22/CMS_NEWS_IMAGE_Q0t8p6urFXhUaqTGv71c.png" />
        </div>
        <div>
          <Image src="https://blog.kakaocdn.net/dn/tHhV7/btqSsQFnT7Y/m1ObmQwwNvKPSd53s7cTck/img.jpg" />
        </div>
        <div>
          <Image src="https://storage.heypop.kr/assets/2022/05/03165606/4.jpg" />
        </div>
      </Slider>
    </Wrapper>
  );
};

export default HomeBanner;

const Wrapper = styled.div`
  height: 360px;
  width: 1200px;
  background-color: #d9d9d9;
  margin: 24px auto 0;
`;
const Image = styled.img`
  height: 360px;
  width: 1200px;
  object-fit: fill;
`;
