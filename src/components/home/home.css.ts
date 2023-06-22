import styled from 'styled-components';
import { device } from '../../utils';
import { StyledHeadingXL } from '../../shared';

export const HeroContainer = styled.div`
  height: 100vh;
  background: var(--primary-gradient);
  overflow: hidden;
`;

export const InnerWrapper = styled.div`
  height: 100%;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 95%;
  margin: 0rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid magenta; */

  @media ${device.md} {
    margin: 10rem auto;
  }

  @media ${device.lg} {
    margin: 0rem auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledTitle = styled(StyledHeadingXL)`
  color: white;
  text-align: center;
  line-height: 38px;

  @media ${device.md} {
    line-height: 76px;
  }

  @media ${device.lg} {
    text-align: left;
  }
`;

export const StyledSubheading = styled.p`
  color: white;
  text-align: center;
  font-size: 14px;
  line-height: 180%;
  width: 100%;

  @media ${device.md} {
    font-size: 20px;
  }

  @media ${device.lg} {
    text-align: left;
    max-width: 460px;
  }
`;

export const HeroInfo = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 4rem;
  /* border: 1px solid magenta; */

  @media ${device.lg} {
    width: 45%;
    margin-bottom: 0rem;
  }

  ${StyledTitle}, ${StyledSubheading} {
    margin-bottom: 1.5rem;
  }
`;

export const HeroFigure = styled.figure`
  position: static;
  /* border: 1px solid magenta; */
  width: 100%;

  @media ${device.lg} {
    position: absolute;
    overflow: hidden;
    bottom: 0px;
    width: 50%;
    right: -200px;
  }

  @media ${device.lg} {
    width: 60%;
  }
`;

export const HeroImg = styled.img`
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > button:first-of-type {
      margin-bottom: 1rem;
    }

  @media ${device.md} {
    flex-direction: row;

    & > button:first-of-type {
      margin-bottom: 0rem;
      margin-right: 1.5rem;
    }
  }

  @media ${device.lg} {
    justify-content: flex-start;
  }
`;
