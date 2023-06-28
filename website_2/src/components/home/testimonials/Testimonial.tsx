import gsap, { CSSPlugin, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useState, useRef, useEffect } from 'react';
import {
  TestimonialContainer,
  TopContainer,
  BottomContainer,
  InnerWrapper,
  BgFigure,
  Img,
  Info,
  Title,
  SubTitle,
  Row,
  TeamFigure,
  TeamImg,
  Slider,
  Slide,
  SlideTop,
  SlideBottom,
  SlideRow,
  SlideAvatar,
  SlideAbout,
  SlideName,
  SlideRole,
  RatingFlex,
  TopFlex,
  Pagination,
  SlideComment,
  StyledRate,
  Page,
  ArrowContainer,
  StyledNextArrow,
  StyledPrevArrow,
  SliderContainer,
  SliderPeripherals,
} from './testimonials.css';
import { CTABtn, Div } from '../../../shared';
import Circles from '../../../assets/images/circulars.svg';
import Member from '../../../assets/images/team/Item.svg';
import Member1 from '../../../assets/images/team/Item-1.svg';
import Member2 from '../../../assets/images/team/Item-2.svg';
import Member3 from '../../../assets/images/team/Item-3.svg';
import Member4 from '../../../assets/images/team/Item-4.svg';

const testimonies = [
  {
    name: 'Purity Yinka',
    occupation: 'CEO Teddy Technologies',
    avatar: Member,
    rating: 5,
    comment: `“With ****, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience.”`,
  },

  {
    name: 'Purity Yinka',
    occupation: 'CEO Teddy Technologies',
    avatar: Member1,
    rating: 5,
    comment: `“With ****, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience.”`,
  },

  {
    name: 'Purity Yinka',
    occupation: 'CEO Teddy Technologies',
    avatar: Member2,
    rating: 5,
    comment: `“With ****, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience.”`,
  },
  {
    name: 'Purity Yinka',
    occupation: 'CEO Teddy Technologies',
    avatar: Member3,
    rating: 5,
    comment: `“With ****, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience.”`,
  },

  {
    name: 'Purity Yinka',
    occupation: 'CEO Teddy Technologies',
    avatar: Member4,
    rating: 5,
    comment: `“With ****, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience.”`,
  },
];

export default function Testimonial() {
  // TODO: Fix carousel slide bug
  const [currentSlide, setCurrentSlide] = useState(1);
  const maxSlide = testimonies.length - 1;
  const slideRef = useRef<HTMLDivElement[]>([]);
  const pushRef = (el: HTMLDivElement) => slideRef.current.push(el);

  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const sliderRef = useRef(null);
  const innerSliderRef = useRef(null);

  const bottomCntRef = useRef(null);
  const bottomTitleRef = useRef(null);
  const bottomSubTitleRef = useRef(null);
  const ctaBtnRef = useRef(null);
  const circlesImgRef = useRef(null);

  const handleNext = () => {
    if (currentSlide < maxSlide) {
      setCurrentSlide(prev => prev + 1);
    } else {
      setCurrentSlide(0);
    }

    slideRef.current.forEach((slide, index) => {
      slide.style.transform = `translateX(${105 * (index - currentSlide)}%)`;
    });
  };

  const handlePrev = () => {
    if (currentSlide == 0) {
      setCurrentSlide(maxSlide);
    } else {
      setCurrentSlide(prev => prev - 1);
    }

    slideRef.current.forEach((slide, index) => {
      slide.style.transform = `translateX(${105 * (index - currentSlide)}%)`;
    });
  };

  // console.log(currentSlide);

  useEffect(() => {
    slideRef.current.forEach((slide, index) => {
      slide.style.transform = `translateX(${105 * (index - currentSlide)}%)`;
    });
  }, []);

  const animateOnScroll = () => {
    const tl = gsap.timeline();

    tl.fromTo(
      innerSliderRef.current,
      {
        opacity: 0,
        x: 80,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: Power4.easeInOut,
        scrollTrigger: {
          trigger: innerSliderRef.current,
          start: 'top 90%',
          end: 'bottom 90%',
          scrub: true,
        },
      }
    )
      .fromTo(
        [titleRef.current, subTitleRef.current],
        {
          opacity: 0,
          x: -80,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          ease: Power4.easeInOut,
          stagger: 0.1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 90%',
            end: 'bottom 90%',
            scrub: true,
          },
        }
      )
      .scrollTrigger?.kill();
  };

  const bottomContainerAnimation = () => {
    const tl = gsap.timeline();

    tl.fromTo(
      [
        bottomCntRef.current,
        bottomTitleRef.current,
        bottomSubTitleRef.current,
        ctaBtnRef.current,
        document.querySelectorAll('.team'),
      ],
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: bottomCntRef.current,
          start: 'top 90%',
          end: 'bottom 90%',
          scrub: true,
        },
      }
    ).fromTo(
      circlesImgRef.current,
      { opacity: 0, width: '0px' },
      {
        opacity: 1,
        width: '50%',
        duration: 0.8,
        delay: 3,
        scrollTrigger: {
          trigger: circlesImgRef.current,
          start: 'top 90%',
          end: 'bottom 90%',
          scrub: true,
        },
      }
    );
  };

  useEffect(() => {
    animateOnScroll();
    bottomContainerAnimation();
  });

  return (
    <TestimonialContainer>
      <Div>
        <TopContainer>
          <Info maxWidth="463px">
            <Title ref={titleRef} color="black" textAlign="center">
              Powering the growth of 100+ business & retailers in your City.
            </Title>
            <SubTitle ref={subTitleRef} color="var(--N200)" textAlign="center">
              From single store, startups, to large multi-store brands.
            </SubTitle>
          </Info>

          <SliderContainer ref={sliderRef}>
            <Slider ref={innerSliderRef}>
              {testimonies.map((testimony, index) => {
                const { avatar, rating, occupation, comment, name } = testimony;
                const arr = [];

                for (let i = 0; i < rating; i++) {
                  arr.push('');
                }
                return (
                  <Slide key={index} ref={pushRef}>
                    <SlideTop>
                      <TopFlex>
                        <RatingFlex>
                          {arr.map((_, index) => {
                            return <StyledRate key={index} />;
                          })}
                        </RatingFlex>
                      </TopFlex>
                      <SlideComment>{comment}</SlideComment>
                    </SlideTop>
                    <SlideBottom>
                      <SlideRow>
                        <SlideAvatar src={avatar} alt="avatar" />
                        <SlideAbout>
                          <SlideName>{name}</SlideName>
                          <SlideRole>{occupation}</SlideRole>
                        </SlideAbout>
                      </SlideRow>
                    </SlideBottom>
                  </Slide>
                );
              })}
            </Slider>

            <SliderPeripherals>
              <ArrowContainer onClick={() => handlePrev()}>
                <StyledPrevArrow />
              </ArrowContainer>

              <Pagination>
                {testimonies.map((_, index) => {
                  return (
                    <Page
                      key={index}
                      index={index}
                      currentSlide={currentSlide}
                    ></Page>
                  );
                })}
              </Pagination>

              <ArrowContainer onClick={() => handleNext()}>
                <StyledNextArrow />
              </ArrowContainer>
            </SliderPeripherals>
          </SliderContainer>
        </TopContainer>

        <BottomContainer ref={bottomCntRef}>
          <InnerWrapper>
            <Info>
              <Title ref={bottomTitleRef}>
                Grow your business presence on social media
              </Title>
              <SubTitle ref={bottomSubTitleRef}>
                Join with more 1200+ happy customers
              </SubTitle>

              <Row>
                <TeamFigure>
                  <TeamImg className="team" src={Member} alt="Member" />
                  <TeamImg className="team" src={Member1} alt="Member1" />
                  <TeamImg className="team" src={Member2} alt="Member2" />
                  <TeamImg className="team" src={Member3} alt="Member3" />
                  <TeamImg className="team" src={Member4} alt="Member4" />
                </TeamFigure>
              </Row>
            </Info>

            <CTABtn ref={ctaBtnRef}>Try for free</CTABtn>
          </InnerWrapper>
          <BgFigure ref={circlesImgRef}>
            <Img src={Circles} alt="circles" />
          </BgFigure>
        </BottomContainer>
      </Div>
    </TestimonialContainer>
  );
}
