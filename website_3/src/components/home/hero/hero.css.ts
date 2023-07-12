import styled from 'styled-components';
import { Heading1, Heading2, StyledSmallText } from '../../../shared';
import { device } from '../../../utils';

export const HeroContainer = styled.section`
  width: 100%;
  padding: 4rem 0rem;
`;

export const HeroWrapper = styled.div`
  padding: 4rem 0rem;
`;

export const HeroContent = styled.div`
  width: 100%;
  max-width: 771px;
  margin: 0px auto;
  /* border: 1px solid magenta; */
`;

export const HeroInnerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeroSmallText = styled(StyledSmallText)`
  width: 100%;
  font-size: 0.74rem;
  text-align: center;
  /* border: 1px solid magenta; */
`;

export const HeroHeading = styled(Heading1)`
  margin: 0.5rem 0rem;
  color: var(--S500);
  width: 100%;
  text-align: center;
`;

export const HeroSubHeading = styled.p`
  min-width: 300px;
  max-width: 416px;
  color: var(--S400);
  text-align: center;
  font-family: Plus Jakarta Sans;
  font-size: 0.984rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* border: 1px solid magenta; */
`;

export const HeroCTAContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid magenta; */

  & > button {
    width: 100%;
  }

  & > button:first-of-type {
    margin-bottom: 1rem;
  }

  @media ${device.lg} {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    & > button {
      width: fit-content;
    }

    & > button:first-of-type {
      margin-bottom: 0rem;
      margin-right: 1rem;
    }
  }
`;

export const HeroCardIntegration = styled.div`
  background-color: var(--S50);
  position: relative;
  top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.md} {
    top: 150px;
  }
`;

export const Figure = styled.figure`
  position: relative;
  top: -20px;
  width: 70%;

  @media ${device.md} {
    top: -100px;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const IntegrationContainer = styled.div`
  width: 100%;
  margin: 2rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid magenta; */

  @media ${device.md} {
    margin: 4rem 0rem;
  }
`;

export const MedalFigure = styled.figure`
    margin-bottom: 1rem;
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid magenta; */

  @media ${device.md} {
    width: 300px;
  }
`;

export const MedalImg = styled.img`
  width: 100%;
  /* border: 1px solid magenta; */
`;

export const StyledHeading2 = styled(Heading2)`
  color: var(--S500);
  text-align: center;
`;
