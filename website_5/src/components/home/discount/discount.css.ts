import styled from 'styled-components';
import { BodyText, Heading2 } from '../../../shared';
import { device } from '../../../utils';

export const DiscountContainer = styled.section`
  padding: 4rem 0rem;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 774px;
  margin: 0 auto;
`;

export const DiscountCard = styled.div`
  width: 100%;
  background-color: var(--primary-light);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0rem;

  @media ${device.md} {
    padding: 4rem 0rem;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

export const InfoSection = styled.div`
  margin-bottom: 1.5rem;
  text-align: center;

  @media ${device.md} {
    text-align: left;
    margin: 0rem;
  }
`;

export const StyledHeading = styled(Heading2)`
  font-weight: 400;
  color: var(--primary-dark);
  margin-bottom: 0.75rem;
`;

export const StyledText = styled(BodyText)`
  color: var(--primary-gray);
`;
