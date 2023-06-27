import { useEffect, useRef } from 'react';
import gsap, { CSSPlugin, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ButtonIcon, Div } from '../../../shared';
import {
  Bottom,
  CtaContainer,
  Top,
  Info,
  Figure,
  PhoneFigure,
  PhoneImg1,
  PhoneImg2,
  Img,
  Title,
  SubTitle,
} from './cta.css';
import Desktop from '../../../assets/images/desktop-mockup.svg';
import Phonesm1 from '../../../assets/images/app-mockup/iPhone-sm-6.5-1.svg';
import Phonesm2 from '../../../assets/images/app-mockup/iPhone-sm-6.5.svg';

export default function Cta() {
  gsap.registerPlugin(CSSPlugin, ScrollTrigger);

  // Top CTA Refs
  const phoneFigureRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const btnRef = useRef(null);

  // bottom CTA Refs
  const bottomBtnRef = useRef(null);
  const desktopFigureRef = useRef(null);
  const bottomTitleRef = useRef(null);
  const bottomSubTitleRef = useRef(null);

  const topCTAOnScroll = () => {
    const tl = gsap.timeline();

    tl.fromTo(
      phoneFigureRef.current,
      {
        opacity: 0,
        x: -80,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: Power4.easeInOut,
        scrollTrigger: {
          // markers: true,
          start: 'top 90%',
          end: 'top top',
          trigger: phoneFigureRef.current,
          scrub: true,
        },
      }
    ).fromTo(
      [titleRef.current, subTitleRef.current, btnRef.current],
      {
        opacity: 0,
        x: 80,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.3,
        ease: Power4.easeInOut,
        stagger: 0.1,
        scrollTrigger: {
          // markers: true,
          start: 'top 90%',
          end: 'top top',
          trigger: phoneFigureRef.current,
          scrub: true,
        },
      }
    );
  };

  const bottomCTAOnScroll = () => {
    const tl = gsap.timeline();

    tl.fromTo(
      desktopFigureRef.current,
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
          // markers: true,
          start: 'top 90%',
          end: 'top top',
          trigger: desktopFigureRef.current,
          scrub: true,
        },
      }
    ).fromTo(
      [bottomTitleRef.current, bottomSubTitleRef.current, bottomBtnRef.current],
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
          // markers: true,
          start: 'top 90%',
          end: 'top top',
          trigger: desktopFigureRef.current,
          scrub: true,
        },
      }
    );
  };

  useEffect(() => {
    topCTAOnScroll();
    bottomCTAOnScroll();
  });

  return (
    <CtaContainer>
      <Div>
        <Top>
          <PhoneFigure ref={phoneFigureRef}>
            <PhoneImg2 src={Phonesm2} alt={'phone-1-mockup'} />
            <PhoneImg1 src={Phonesm1} alt={'phone-2-mockup'} />
          </PhoneFigure>

          <Info>
            <Title color="var(--primary)" ref={titleRef}>
              Important feature for your business
            </Title>
            <SubTitle ref={subTitleRef}>
              Graphs displaying your performance for metrics like follower
              evolution, average engagement rate per post and reach and
              impressions to give you the insights.
            </SubTitle>
            <div ref={btnRef}>
              <ButtonIcon text="Text button" />
            </div>
          </Info>
        </Top>
        <Bottom>
          <Info>
            <Title ref={bottomTitleRef}>
              Schedule Your Post Whenever You Want
            </Title>
            <SubTitle ref={bottomSubTitleRef}>
              Publish your content automatically to ensure that your content
              reaches the right people. Built-in features such as
            </SubTitle>
            <div ref={bottomBtnRef}>
              <ButtonIcon text="Text button" color="black" />
            </div>
          </Info>

          <Figure ref={desktopFigureRef}>
            <Img src={Desktop} alt={'desktop-mockup'} />
          </Figure>
        </Bottom>
      </Div>
    </CtaContainer>
  );
}
