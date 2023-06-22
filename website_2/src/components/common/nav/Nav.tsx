import { useEffect, useState, useRef } from 'react';
import gsap, { CSSPlugin, Power4 } from 'gsap';
import { Div, Logo, Button, ButtonOutline } from '../../../shared';
import {
  NavContainer,
  FlexWrapper,
  ItemsContainer,
  Item,
  Hamburger,
  TopLine,
  BottomLine,
} from './nav.css';

gsap.registerPlugin(CSSPlugin);

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

export default function Nav() {
  const mobileRef = useRef(null);
  const logoRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const [openNav, setOpennav] = useState(false);

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
        color: 'white',
        duration: 0.7,
        delay: -0.6,
        yoyoEase: Power4.easeInOut,
      });
  };

  useEffect(() => {
    openNav ? forwardAnimate() : backAnimate();
  }, [openNav]);

  return (
    <NavContainer>
      <Div>
        <FlexWrapper>
          <Logo ref={logoRef}>Brand Logo</Logo>

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
