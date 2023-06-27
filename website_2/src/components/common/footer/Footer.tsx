import { useEffect, useRef } from 'react';
import gsap, { CSSPlugin, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FooterContainer,
  FooterWrapper,
  FooterSection,
  FooterGrid,
  GridItem,
  GridInner,
  Row,
  IconPod,
  StyledGoogleIcon,
  StyledTwitterIcon,
  StyledInstagramIcon,
  StyledLinkedinIcon,
  Text,
  LinkText,
} from './footer.css';
import { Div, Heading6, Logo } from '../../../shared';

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

export default function Footer() {
  gsap.registerPlugin(CSSPlugin, ScrollTrigger);
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
            <Text>Build a very nice business template that’s astonishing.</Text>
            <Row>
              <IconPod href="/">
                <StyledGoogleIcon />
              </IconPod>
              <IconPod href="/">
                <StyledTwitterIcon />
              </IconPod>
              <IconPod href="/">
                <StyledInstagramIcon />
              </IconPod>
              <IconPod href="/">
                <StyledLinkedinIcon />
              </IconPod>
            </Row>
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
      </Div>
    </FooterContainer>
  );
}
