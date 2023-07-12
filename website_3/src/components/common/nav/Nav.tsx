import React, { useEffect, useState, useRef } from 'react';
import gsap, { Power4 } from 'gsap';
import { useMediaQuery } from 'react-responsive';
import { Div, Button, ButtonOutline } from '../../../shared';
import {
  NavContainer,
  NavLogo,
  FlexWrapper,
  DesktopItemsContainer,
  MobileItemsContainer,
  Item,
  Hamburger,
  TopLine,
  MidLine,
  BottomLine,
  MobileOthers,
  MobileOtherItem,
  MobileInfo,
} from './nav.css';

const desktopItems = [
  {
    id: 'item-0',
    name: 'Product',
  },
  {
    id: 'item-0',
    name: 'Pricing',
  },
  {
    id: 'item-0',
    name: 'integrations',
  },
  {
    id: 'item-0',
    name: 'Resources',
  },
  {
    id: 'item-0',
    name: 'Company',
  },
];

const mobileItems = [
  {
    id: 'mobile-item',
    name: 'Product',
  },
  {
    id: 'mobile-item',
    name: 'Resources',
  },
  {
    id: 'mobile-item',
    name: 'Company',
  },
];

const mobileOtherItems = [
  {
    id: 'mobile-item',
    name: 'Get started',
  },
  {
    id: 'mobile-item',
    name: 'Login',
  },
  {
    id: 'mobile-item',
    name: 'Pricing',
  },
  {
    id: 'mobile-item',
    name: 'Integrations',
  },
];

interface INavProps {
  animate: boolean;
}

export default function Nav({ animate }: INavProps) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const navbarRef = useRef(null);
  const mobileRef = useRef(null);
  const logoRef = useRef(null);
  const bottomRef = useRef(null);
  const topRef = useRef(null);
  const midRef = useRef(null);
  const [openNav, setOpennav] = useState(false);

  // Hamburger menu animation
  const forwardAnimate = () => {
    const tl = gsap.timeline();

    tl.to(midRef.current, {
      opacity: 0,
      duration: 0.1,
      ease: Power4.easeInOut,
    })
      .to(topRef.current, {
        margin: '0px',
        rotate: '45deg',
        backgroundColor: 'white',
        duration: 0.1,
        ease: Power4.easeInOut,
      })
      .to(bottomRef.current, {
        margin: '0px',
        rotate: '-45deg',
        backgroundColor: 'white',
        duration: 0.1,
        ease: Power4.easeInOut,
      })
      .to(mobileRef.current, {
        opacity: 1,
        left: '0px',
        duration: 1,
        delay: -0.6,
        ease: Power4.easeInOut,
      })
      .to(document.querySelectorAll('.mobile-item'), {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: Power4.easeInOut,
      })
      .to(logoRef.current, {
        color: '#1B3743',
        duration: 1,
        delay: -0.6,
        ease: Power4.easeInOut,
      });
  };

  // Hamburger menu animation
  const backAnimate = () => {
    const tl = gsap.timeline();

    tl.to(midRef.current, {
      opacity: 1,
      duration: 0.1,
      ease: Power4.easeInOut,
    })
      .to(topRef.current, {
        rotate: '0deg',
        marginBottom: '0.15rem',
        backgroundColor: '#2C5A6E',
        duration: 0.1,
        ease: Power4.easeInOut,
      })
      .to(bottomRef.current, {
        rotate: '0deg',
        marginTop: '0.15rem',
        backgroundColor: '#2C5A6E',
        duration: 0.1,
        ease: Power4.easeInOut,
      })
      .to(document.querySelectorAll('.mobile-item'), {
        opacity: 0,
        x: -40,
        duration: 0.8,
        stagger: 0.1,
        ease: Power4.easeInOut,
      })
      .to(mobileRef.current, {
        opacity: 0,
        left: '-1024px',
        duration: 1,
        delay: -0.6,
        ease: Power4.easeInOut,
      })
      .to(logoRef.current, {
        color: '#1B3743',
        duration: 1,
        delay: -0.6,
        ease: Power4.easeInOut,
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
    isDesktop || openNav ? forwardAnimate() : backAnimate();
  }, [openNav, isDesktop]);

  useEffect(() => {
    if (animate) navAnimation();
  }, [animate]);

  return (
    <NavContainer ref={navbarRef}>
      <Div>
        <FlexWrapper>
          <NavLogo ref={logoRef}>Brand Logo</NavLogo>

          <Hamburger onClick={() => setOpennav(!openNav)}>
            <TopLine ref={topRef}></TopLine>
            <MidLine ref={midRef}></MidLine>
            <BottomLine ref={bottomRef}></BottomLine>
          </Hamburger>

          <React.Fragment>
            {isDesktop ? (
              <DesktopItemsContainer ref={mobileRef}>
                {desktopItems.map((item, index) => {
                  return <Item key={index}>{item.name}</Item>;
                })}
                <ButtonOutline>Login</ButtonOutline>
                <Button>Get started</Button>
              </DesktopItemsContainer>
            ) : (
              <MobileItemsContainer ref={mobileRef}>
                {mobileItems.map((item, index) => {
                  return (
                    <Item key={index} className={item.id}>
                      {item.name}
                    </Item>
                  );
                })}
                <MobileOthers>
                  {mobileOtherItems.map((item, index) => {
                    return (
                      <MobileOtherItem key={index} className={item.id}>
                        {item.name}
                      </MobileOtherItem>
                    );
                  })}
                </MobileOthers>
                <MobileInfo className="mobile-item">
                  Brand Logo is a brand that was built and license by the
                  Nigeria design agency 2023 with coding and development by
                  credvent technolhoies
                </MobileInfo>
              </MobileItemsContainer>
            )}
          </React.Fragment>
        </FlexWrapper>
      </Div>
    </NavContainer>
  );
}
