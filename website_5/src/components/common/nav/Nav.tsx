import { useEffect, useRef } from 'react';
import gsap, { Power4 } from 'gsap';
import { Div } from '../../../shared';
import {
  NavContainer,
  NavLogo,
  FlexWrapper,
  IconWrapper,
  StyledTwitterIcon,
  StyledLinkedInIcon,
  StyledInstagramIcon,
} from './nav.css';

interface INavProps {
  animate: boolean;
}

export default function Nav({ animate }: INavProps) {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  // Navbar animation
  const navAnimation = () => {
    const tl = gsap.timeline();

    tl.to(navbarRef.current, {
      opacity: 1,
      top: '0px',
      duration: 1.5,
      delay: 1,
      ease: Power4.easeInOut,
    });
  };

  useEffect(() => {
    if (animate) navAnimation();
  }, [animate]);

  return (
    <NavContainer ref={navbarRef}>
      <Div>
        <FlexWrapper>
          <NavLogo ref={logoRef}>Brand Logo</NavLogo>

          <IconWrapper>
            <StyledTwitterIcon />
            <StyledLinkedInIcon />
            <StyledInstagramIcon />
          </IconWrapper>
        </FlexWrapper>
      </Div>
    </NavContainer>
  );
}
