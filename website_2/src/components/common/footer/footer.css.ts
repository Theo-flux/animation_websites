import styled from 'styled-components';
import { device } from '../../../utils';
import {
  RiGoogleFill,
  RiTwitterFill,
  RiInstagramFill,
  RiLinkedinFill,
} from 'react-icons/ri';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: var(--N900);
`;

export const FooterWrapper = styled.div`
  padding: 4rem 0rem;
  display: grid;
  grid-template-columns: 1fr;

  @media ${device.lg} {
    grid-template-columns: 0.3fr 1fr;
  }
`;

export const FooterSection = styled.div`
  margin-bottom: 2rem;
`;

export const Row = styled.div`
  display: flex;
`;

export const IconPod = styled.a`
  text-decoration: none;
  background-color: var(--N600);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 100%;

  &:not(:last-of-type) {
    margin-right: 0.5rem;
  }
`;

export const StyledGoogleIcon = styled(RiGoogleFill)`
  color: var(--G50);
`;
export const StyledTwitterIcon = styled(RiTwitterFill)`
  color: var(--G50);
`;
export const StyledInstagramIcon = styled(RiInstagramFill)`
  color: var(--G50);
`;
export const StyledLinkedinIcon = styled(RiLinkedinFill)`
  color: var(--G50);
`;

export const Text = styled.p`
  color: #d3d6d8;
  width: 185px;
  margin: 1rem 0rem;
  font-size: 14px;
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
