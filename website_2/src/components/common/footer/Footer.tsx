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
  return (
    <FooterContainer>
      <Div>
        <FooterWrapper>
          <FooterSection>
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
              const { column, links } = item;
              return (
                <GridItem key={index}>
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
