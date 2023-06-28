import styled from 'styled-components';
import { device, radius, transition } from '../../utils';
import { HiArrowNarrowRight } from 'react-icons/hi';

const ButtonReset = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 1rem;
  border-radius: 100px;
  font-size: 1rem;
  text-transform: uppercase;
  ${transition}

  @media ${device.md} {
    font-size: 1em;
    padding: 0.75rem 2rem;
  }
`;

export const Button = styled(ButtonReset)`
  color: white;
  background-color: var(--primary-dark);

  @media ${device.md} {
    color: var(--S50);
    background-color: var(--S300);
    &:hover {
      color: var(--S300);
      background-color: var(--S50);
    }
  }
`;

export const ButtonOutline = styled(ButtonReset)`
  color: var(--S300);
  background-color: transparent;
  outline: 1px solid var(--S300);
  outline-offset: -1px;
  ${transition}

  @media ${device.md} {
    color: var(--S300);

    &:hover {
      color: var(--S300);
      background-color: var(--S50);
      outline: 1px solid var(--S50);
    }
  }
`;

export const CTABtn = styled(ButtonReset)`
  padding: 1rem 2rem;
  color: var(--primary);
  background-color: white;

  &:hover {
    color: white;
    background-color: var(--primary);
  }
`;

type ButtonIconContainerProps = {
  color?: string;
};

export const StyledArrowIcon = styled(HiArrowNarrowRight)``;

export const ButtonIconContainer = styled(
  ButtonReset
)<ButtonIconContainerProps>`
  padding: 1rem;
  color: ${props => (props.color ? `${props.color}` : `var(--primary)`)};
  background-color: transparent;
  ${transition}

  &:hover {
    color: white;
    background-color: var(--primary);
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BtnText = styled.p`
  margin-right: 1rem;
`;
