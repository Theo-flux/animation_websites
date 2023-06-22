import styled from 'styled-components';
import { device, radius, transition } from '../../utils';
import { HiArrowNarrowRight } from 'react-icons/hi';

const ButtonReset = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 1rem;
  border-radius: ${radius.sm};
  font-size: 1rem;
  ${transition}

  @media ${device.md} {
    font-size: 1em;
    padding: 0.5rem 1rem;
  }
`;

export const Button = styled(ButtonReset)`
  color: white;
  background-color: var(--primary-dark);

  @media ${device.md} {
    color: var(--primary);
    background-color: white;
    &:hover {
      color: white;
      background-color: var(--primary);
    }
  }
`;

export const ButtonOutline = styled(ButtonReset)`
  color: var(--primary);
  background-color: transparent;
  ${transition}

  @media ${device.md} {
    color: white;

    &:hover {
      color: var(--primary);
      background-color: white;
    }
  }
`;

export const CTABtn = styled(ButtonReset)`
  padding: 1rem 2rem;
  color: var(--primary);

  &:hover {
    color: white;
    background-color: var(--primary);
  }
`;

type ButtonIconContainerProps = {
  color?: string;
};

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

export const StyledArrowIcon = styled(HiArrowNarrowRight)``;
