import styled from 'styled-components';
import { device, transition } from '../../../utils';
import { BodyText, Heading2, StyledSmallText } from '../../../shared';

export const TrackerContainer = styled.section`
  padding: 4rem 0rem;
  background-color: var(--S50);
`;

export const Trackerwrapper = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
`;

export const InfoSection = styled.div`
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  margin-bottom: 2rem;
  /* border: 1px solid magenta; */
`;

export const StyledHeading = styled(Heading2)`
  text-align: center;
`;

export const SelectionBox = styled.div`
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  /* border: 1px solid magenta; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
`;

export const OptionBox = styled.div`
  cursor: pointer;
  width: 33%;
  padding: 0.75rem;
  text-align: center;
  background-color: #859fab20;
  color: var(--S300);
  ${transition}

  &:first-of-type {
    background-color: var(--S300);
    color: var(--white);
  }

  &:hover {
    background-color: var(--S300);
    color: var(--white);
  }

  @media ${device.md} {
    padding: 1rem;
  }
`;

export const TrackerCard = styled.div`
  margin-top: 3rem;
  background-color: var(--white);
  height: 650px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem 3rem 1rem;

  @media ${device.md} {
    padding: 0rem;
    height: 600px;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const CardInfo = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.md} {
    align-items: flex-start;
  }

  /* border: 1px solid magenta; */
`;

export const StyledTinyText = styled(StyledSmallText)`
  color: var(--S300);
  text-align: center;

  @media ${device.md} {
    text-align: left;
  }
`;

export const StyledHeading2 = styled(Heading2)`
  text-align: center;
  margin: 0.5rem 0rem 1rem 0rem;

  @media ${device.md} {
    text-align: left;
  }
`;

export const Text = styled(BodyText)`
  max-width: 360px;
  text-align: center;
  margin-bottom: 1rem;

  @media ${device.md} {
    max-width: 100%;
    text-align: left;
  }
`;

export const CardFigure = styled.figure`
  position: relative;
  width: fit-content;
  margin-bottom: 3rem;

  @media ${device.lg} {
    margin: 0rem;
    left: -50px;
  }
`;

export const CardImage = styled.img`
  position: relative;
  left: 0px;
  box-shadow: rgba(9, 111, 184, 0.15) 0px 10px 50px;

  &:first-of-type {
    top: -20px;
  }

  &:last-of-type {
    position: absolute;
    left: 15%;
    transform: translate(-50%, 0);
    bottom: -20px;
  }

  @media ${device.lg} {
    scale: 0.85;

    &:first-of-type {
      top: -50px;
    }

    &:last-of-type {
      position: absolute;
      left: 35%;
      transform: translate(-50%, 0);
      bottom: -40px;
    }
  }

  /* border: 1px solid magenta; */
`;
