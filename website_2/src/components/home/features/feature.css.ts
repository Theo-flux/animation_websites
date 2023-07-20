import styled from 'styled-components';
import { Heading2, Heading5, BodyText } from '../../../shared';
import { RiCommandFill } from 'react-icons/ri';
import { transition } from '../../../utils';

export const FeatureContainer = styled.div`
  background-color: var(--white);
  padding: 4rem 0rem;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Top = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled(Heading2)`
  text-align: center;
  color: black;
  margin-bottom: 1rem;
`;

export const SubTitle = styled(BodyText)`
  text-align: center;
  max-width: 579px;
  color: black;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const CardContainer = styled.div`
  cursor: pointer;
  background-color: white;
  max-width: 260px;
  height: 300px;
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
  background-color: var(--primary-light);
  width: 40px;
  height: 40px;
  border-radius: 8px;
`;

export const StyledCommandIcon = styled(RiCommandFill)`
  color: var(--N500);
  font-size: 1.2rem;
`;

export const CardTitle = styled(Heading5)`
  max-width: 198px;
  margin: 1rem 0rem;
`;

export const CardText = styled(BodyText)`
  max-width: 198px;
`;
