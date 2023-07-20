import styled from 'styled-components';
import { device, transition } from '../../../utils';
import { Heading2, Heading5, BodyText } from '../../../shared';
import { PiPuzzlePieceDuotone } from 'react-icons/pi';

export const FeaturesContainer = styled.div`
  padding: 4rem 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;

  @media ${device.md} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const StyledHeading = styled(Heading2)`
  text-align: center;
  width: 100%;
  max-width: 370px;
  margin-bottom: 2rem;

  @media ${device.lg} {
    text-align: left;
  }
`;

export const CardContainer = styled.div`
  cursor: pointer;
  background-color: white;
  max-width: 260px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  ${transition}

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`;

export const IconCase = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5c339e10;
  width: 50px;
  height: 50px;
  border-radius: 100px;
`;

export const StyledCommandIcon = styled(PiPuzzlePieceDuotone)`
  color: var(--N500);
  font-size: 1.7rem;
`;

export const CardTitle = styled(Heading5)`
  max-width: 198px;
  margin: 1rem 0rem;
`;

export const CardText = styled(BodyText)`
  max-width: 198px;
  margin-bottom: 2rem;
`;

export const CardLink = styled.a`
  text-decoration: none;
  color: var(--S300);

  &:hover {
    text-decoration: underline;
  }
`;
