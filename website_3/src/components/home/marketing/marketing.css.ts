import styled from 'styled-components';
import { device } from '../../../utils';
import { BodyText, Heading2, StyledSmallText } from '../../../shared';

export const MarketingContainer = styled.div`
  padding: 6rem 0rem 4rem 0rem;

  @media ${device.md} {
    padding: 10rem 0rem 4rem 0rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  @media ${device.lg} {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

export const InfoSection = styled.div`
  width: 100%;
  max-width: 397px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.lg} {
    align-items: flex-start;
  }
`;

export const FigureSection = styled.figure`
  background-color: var(--S500);
  width: 230px;
  margin-bottom: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.md} {
    width: 400px;
  }

  @media ${device.lg} {
    width: 450px;
  }

  @media ${device.xl} {
    width: 500px;
  }
`;

export const Image = styled.img`
  width: 100%;
  position: relative;
  top: -20px;
  left: -20px;

  @media ${device.md} {
    top: -40px;
    left: -40px;
  }

  @media ${device.xl} {
    top: -60px;
    left: -60px;
  }
`;

export const StyledTinyText = styled(StyledSmallText)`
  color: var(--S300);
  text-align: center;

  @media ${device.md} {
    text-align: left;
  }
`;

export const StyledHeading = styled(Heading2)`
  text-align: center;
  margin: 0.5rem 0rem 1rem 0rem;

  @media ${device.lg} {
    text-align: left;
  }
`;

export const Text = styled(BodyText)`
  max-width: 360px;
  text-align: center;
  margin-bottom: 0.5rem;

  @media ${device.lg} {
    text-align: left;
  }
`;

export const UL = styled.ul`
  padding: 0rem;
  list-style-position: inside;
  color: #6b6b6b;
  width: 100%;
  max-width: fit-content;
  margin: 0 auto;

  @media ${device.lg} {
    max-width: 100%;
  }
`;

export const LI = styled.li`
  padding: 0rem;
  font-family: Plus Jakarta Sans;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
`;
