import styled from 'styled-components';
import { Heading1, Heading2, StyledSmallText } from '../../../shared';
import { device } from '../../../utils';

export const HeroContainer = styled.section`
  position: relative;
  background-color: var(--primary-light);
  width: 100%;
`;

export const HeroContent = styled.div`
  padding: 3rem 0rem;
  width: 90%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroHeading = styled(Heading1)`
  color: var(--N600);
  width: 100%;
  text-align: center;
`;

export const HeroSubHeading = styled.p`
  min-width: 226px;
  max-width: 448px;
  margin: 2rem auto;
  color: #89745b;
  text-align: center;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;

  @media ${device.md} {
    font-size: 20px;
  }
`;

export const Figure = styled.figure`
  width: 100%;
`;

export const Img = styled.img`
  width: 100%;
`;
