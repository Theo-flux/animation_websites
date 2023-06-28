import styled from 'styled-components';
import { device } from '../../../utils';
import { RiFacebookFill } from 'react-icons/ri';
import { FaTelegramPlane, FaYoutube, FaLinkedin } from 'react-icons/fa';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: var(--S300);
  /* border: 1px solid magenta; */
  padding: 4rem 0rem;
`;

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* border: 1px solid magenta; */

  @media ${device.lg} {
    grid-template-columns: 0.3fr 1fr;
  }
`;

export const FooterSection = styled.div`
  margin-bottom: 2rem;
`;

export const Row = styled.div`
  display: flex;
  margin-bottom: 2rem;

  & > button:first-of-type {
    margin-right: 1rem;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;

  & > button:first-of-type {
    margin-bottom: 0.35rem;
  }
`;

export const IconPod = styled.a`
  text-decoration: none;
  background-color: var(--S50);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 100%;

  &:not(:last-of-type) {
    margin-right: 0.5rem;
  }
`;

type TFacbookIcon = {
  color?: string;
};

export const StyledFacebookIcon = styled(RiFacebookFill)<TFacbookIcon>`
  color: ${props => (props.color ? `${props.color}` : `var(--S500)`)};
  font-size: 1.2rem;
`;

export const StyledTelegramIcon = styled(FaTelegramPlane)`
  color: ${props => (props.color ? `${props.color}` : `var(--S500)`)};
  font-size: 1.2rem;
`;

export const StyledLinedInIcon = styled(FaLinkedin)`
  color: ${props => (props.color ? `${props.color}` : `var(--S500)`)};
  font-size: 1.2rem;
  margin-left: 0.5rem;
`;

export const StyledYoutubeIcon = styled(FaYoutube)`
  color: ${props => (props.color ? `${props.color}` : `var(--S500)`)};
  font-size: 1.2rem;
  margin-left: 0.5rem;
`;

export const Text = styled.p`
  color: #d3d6d8;
  width: 185px;
  margin: 0.5rem 0rem;
  font-size: 12px;
  font-weight: 500;
  line-height: 140%;
`;

export const FooterGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media ${device.md} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const GridItem = styled.div``;

export const GridInner = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

export const LinkText = styled.a`
  text-decoration: none;
  color: #fefefe;
  font-weight: 200;
  line-height: 120%;
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 2rem;
  }

  @media ${device.lg} {
    &:last-of-type {
      margin-bottom: 0rem;
    }
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #ffffff30;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div:last-of-type {
    width: fit-content;
  }

  @media ${device.lg} {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    & > div {
      width: 60%;
    }
    & > div:first-of-type,
    & > div:last-of-type {
      width: fit-content;
    }
  }
`;

export const FooterBottomItem = styled.div`
  /* border: 1px solid magenta; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Copyright = styled.a`
  font-size: 0.675rem;
  color: #ffffff70;
  text-decoration: none;
  font-family: Plus Jakarta Sans;
  font-weight: 500;
  line-height: 24px;
`;

export const BottomText = styled(Copyright)`
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;

  @media ${device.md} {
    margin-bottom: 0rem;
  }
`;
