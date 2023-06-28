import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  FooterContainer,
  FooterWrapper,
  FooterSection,
  FooterGrid,
  GridItem,
  GridInner,
  Row,
  Col,
  IconPod,
  StyledTelegramIcon,
  StyledFacebookIcon,
  StyledLinedInIcon,
  StyledYoutubeIcon,
  Text,
  LinkText,
  FooterBottom,
  FooterBottomItem,
  Copyright,
  BottomText,
} from './footer.css';
import { Div, Heading6, Logo, GoogleBtn, AppleBtn } from '../../../shared';

const items = [
  {
    id: 'footer',
    column: 'First Column',
    links: [
      {
        href: '/',
        name: 'First Link',
      },
      {
        href: '/',
        name: 'Second Link',
      },
      {
        href: '/',
        name: 'Third Link',
      },
      {
        href: '/',
        name: 'Fourth Link',
      },
      {
        href: '/',
        name: 'Fifth Link',
      },
    ],
  },

  {
    id: 'footer',
    column: 'Second Column',
    links: [
      {
        href: '/',
        name: 'First Link',
      },
      {
        href: '/',
        name: 'Second Link',
      },
      {
        href: '/',
        name: 'Third Link',
      },
      {
        href: '/',
        name: 'Fourth Link',
      },
      {
        href: '/',
        name: 'Fifth Link',
      },
    ],
  },

  {
    id: 'footer',
    column: 'Third Column',
    links: [
      {
        href: '/',
        name: 'First Link',
      },
      {
        href: '/',
        name: 'Second Link',
      },
      {
        href: '/',
        name: 'Third Link',
      },
      {
        href: '/',
        name: 'Fourth Link',
      },
    ],
  },

  {
    id: 'footer',
    column: 'Fourth Column',
    links: [
      {
        href: '/',
        name: 'First Link',
      },
      {
        href: '/',
        name: 'Second Link',
      },
      {
        href: '/',
        name: 'Third Link',
      },
    ],
  },
];

const bottomItem = [
  {
    href: '/',
    name: 'End User Privacy Policy',
  },
  {
    href: '/',
    name: 'Privacy Policy',
  },
  {
    href: '/',
    name: 'Cookies policy',
  },
  {
    href: '/',
    name: 'Terms & Conditions',
  },
  {
    href: '/',
    name: 'DPA',
  },
  {
    href: '/',
    name: 'Security',
  },
];

export default function Footer() {
  const footerbrandRef = useRef(null);
  const containerRef = useRef(null);

  const onScrollFooter = () => {
    const tl = gsap.timeline();

    tl.fromTo(
      [footerbrandRef.current, document.querySelectorAll('.footer')],
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
          end: 'bottom bottom',
          scrub: true,
        },
      }
    );
  };

  useEffect(() => {
    onScrollFooter();
  });
  return (
    <FooterContainer>
      <Div>
        <FooterWrapper ref={containerRef}>
          <FooterSection ref={footerbrandRef}>
            <Logo>Brand Logo</Logo>
            <Text>JOIN OUR COMMUNITIES ON</Text>
            <Row>
              <IconPod href="/">
                <StyledFacebookIcon />
              </IconPod>
              <IconPod href="/">
                <StyledTelegramIcon />
              </IconPod>
            </Row>

            <Text>DO BUSINESS ON THE GO</Text>
            <Col>
              <GoogleBtn />
              <AppleBtn />
            </Col>
          </FooterSection>

          <FooterGrid>
            {items.map((item, index) => {
              const { id, column, links } = item;
              return (
                <GridItem key={index} className={id}>
                  <Heading6>{column}</Heading6>

                  <GridInner>
                    {links.map((link, id) => {
                      const { href, name } = link;
                      return (
                        <LinkText key={id} href={href}>
                          {name}
                        </LinkText>
                      );
                    })}
                  </GridInner>
                </GridItem>
              );
            })}
          </FooterGrid>
        </FooterWrapper>

        <FooterBottom>
          <FooterBottomItem>
            <Copyright href="/">© Credvnet 2021-2023</Copyright>
          </FooterBottomItem>
          <FooterBottomItem>
            {bottomItem.map((item, index) => {
              return (
                <BottomText key={index} href={item.href}>
                  {item.name}
                </BottomText>
              );
            })}
          </FooterBottomItem>
          <FooterBottomItem>
            <StyledFacebookIcon color="white" />
            <StyledYoutubeIcon color="white" />
            <StyledLinedInIcon color="white" />
          </FooterBottomItem>
        </FooterBottom>
      </Div>
    </FooterContainer>
  );
}
