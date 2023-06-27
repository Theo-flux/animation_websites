import React, { useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  HeroContainer,
  InnerWrapper,
  Wrapper,
  HeroInfo,
  HeroFigure,
  HeroImg,
  StyledTitle,
  StyledSubheading,
  Row,
  WhiteBg,
} from './home.css';

import Dashboard from '../../../assets/images/dash-test.svg';
import Ring from '../../../assets/images/ring.svg';
import { CTABtn, ButtonIcon } from '../../../shared';
import { Brand } from '..';
import gsap, { CSSPlugin, Power4 } from 'gsap';
gsap.registerPlugin(CSSPlugin);

interface IHeroProps {
  animate: boolean;
}

export default function Hero({ animate }: IHeroProps) {
  const isTablet = useMediaQuery({ minWidth: 767 });
  const heroRef = useRef(null);
  const dashboardRef = useRef(null);
  const infoRef = useRef(null);

  const heroReveal = () => {
    const tl = gsap.timeline();
    tl.to(heroRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: Power4.easeInOut,
    })
      .to(dashboardRef.current, {
        bottom: '0px',
        duration: 1.3,
        opacity: 1,
      })
      .to(infoRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.3,
        delay: -1,
        ease: Power4.easeIn,
      });
  };

  useEffect(() => {
    if (animate) heroReveal();
  }, [animate]);

  return (
    <React.Fragment>
      <HeroContainer ref={heroRef}>
        <InnerWrapper
          style={{
            background: `url(${Ring})`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `${isTablet ? 'right' : 'left'}`,
          }}
        >
          <Wrapper>
            <HeroInfo ref={infoRef}>
              <StyledTitle>Business heading will dangle right here</StyledTitle>
              <StyledSubheading>
                Your sub-heading comes right here with text to support the main
                heading.
              </StyledSubheading>

              <Row>
                <CTABtn>Primary button</CTABtn>
                <ButtonIcon text="Primary button" color="white" />
              </Row>
            </HeroInfo>
            <HeroFigure ref={dashboardRef}>
              <HeroImg src={Dashboard} alt="" />
            </HeroFigure>
          </Wrapper>
        </InnerWrapper>
        <WhiteBg></WhiteBg>
      </HeroContainer>
      <Brand />
    </React.Fragment>
  );
}
