import { useEffect, useState, useRef } from 'react';
import gsap, { Power4 } from 'gsap';
import { Div, Button, ButtonOutline } from '../../../shared';
import {
  NavContainer,
  NavLogo,
  FlexWrapper,
  ItemsContainer,
  Item,
  Hamburger,
  TopLine,
  BottomLine,
} from './nav.css';

const items = [
  {
    id: 'item-0',
    name: 'button',
  },
  {
    id: 'item-0',
    name: 'button',
  },
  {
    id: 'item-0',
    name: 'button',
  },
  {
    id: 'item-0',
    name: 'button',
  },
  {
    id: 'item-0',
    name: 'button',
  },
];

interface INavProps {
  animate: boolean;
}

export default function Nav({ animate }: INavProps) {
  const navbarRef = useRef(null);
  const mobileRef = useRef(null);
  const logoRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const [openNav, setOpennav] = useState(false);

  // Hamburger menu animation
  const forwardAnimate = () => {
    const tl = gsap.timeline();

    tl.to(leftRef.current, {
      margin: '0px',
      backgroundColor: 'black',
      duration: 0.1,
      ease: Power4.easeInOut,
    })
      .to(
        rightRef.current,
        {
          margin: '0px',
          backgroundColor: 'black',
          duration: 0.1,
          ease: Power4.easeInOut,
        },
        0
      )
      .to(leftRef.current, {
        rotate: '45deg',
        duration: 0.1,
        ease: Power4.easeInOut,
      })
      .to(rightRef.current, {
        rotate: '-45deg',
        duration: 0.1,
        ease: Power4.easeInOut,
      })
      .to(mobileRef.current, {
        left: '0px',
        duration: 0.5,
        yoyoEase: Power4.easeInOut,
      })
      .to(logoRef.current, {
        color: 'black',
        duration: 0.5,
        yoyoEase: Power4.easeInOut,
      });
  };

  // Hamburger menu animation
  const backAnimate = () => {
    const tl = gsap.timeline();

    tl.to(leftRef.current, {
      rotate: '0deg',
      duration: 0.1,
      ease: Power4.easeInOut,
    })
      .to(rightRef.current, {
        rotate: '0deg',
        duration: 0.1,
        ease: Power4.easeInOut,
      })
      .to(leftRef.current, {
        marginBottom: '0.15rem',
        backgroundColor: 'white',
        duration: 0.1,
        ease: Power4.easeInOut,
      })
      .to(
        rightRef.current,
        {
          marginTop: '0.15rem',
          backgroundColor: 'white',
          duration: 0.1,
          ease: Power4.easeInOut,
        },
        0
      )
      .to(mobileRef.current, {
        left: '-900px',
        duration: 0.7,
        yoyoEase: Power4.easeInOut,
      })
      .to(logoRef.current, {
        color: '#1B3743',
        duration: 0.7,
        delay: -0.6,
        yoyoEase: Power4.easeInOut,
      });
  };

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
    openNav ? forwardAnimate() : backAnimate();
  }, [openNav]);

  useEffect(() => {
    if (animate) navAnimation();
  }, [animate]);

  return (
    <NavContainer ref={navbarRef}>
      <Div>
        <FlexWrapper>
          <NavLogo ref={logoRef}>Brand Logo</NavLogo>

          <Hamburger onClick={() => setOpennav(!openNav)}>
            <TopLine ref={leftRef}></TopLine>
            <BottomLine ref={rightRef}></BottomLine>
          </Hamburger>

          <ItemsContainer ref={mobileRef}>
            {items.map((item, index) => {
              return <Item key={index}>{item.name}</Item>;
            })}

            <ButtonOutline>Login</ButtonOutline>
            <Button>Create account</Button>
          </ItemsContainer>
        </FlexWrapper>
      </Div>
    </NavContainer>
  );
}
