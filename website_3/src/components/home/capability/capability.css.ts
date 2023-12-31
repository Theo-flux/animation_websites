import styled from 'styled-components';
import { device } from '../../../utils';
import { BodyText, Heading2, StyledSmallText } from '../../../shared';

export const CapabilityContainer = styled.div`
  padding: 2rem 0rem 4rem 0rem;

  @media ${device.md} {
    padding: 8rem 0rem 4rem 0rem;
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
  background-color: var(--S50);
  width: 230px;
  height: 276px;
  margin-bottom: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.md} {
    width: 400px;
    height: 400px;
  }

  @media ${device.lg} {
    width: 450px;
    height: 450px;
  }

  @media ${device.xl} {
    width: 566px;
    height: 684px;
  }
`;

export const Image = styled.img`
  width: 70%;
`;

export const StyledTinyText = styled(StyledSmallText)`
  color: var(--S300);
  text-align: center;

  @media ${device.lg} {
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
    max-width: 100%;
    text-align: left;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  & > button:first-of-type {
    margin-right: 1rem;
  }

  @media ${device.lg} {
    justify-content: start;
  }
`;
