import styled from 'styled-components';
import { device, radius, transition } from '../../utils';

const ButtonReset = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 1rem;
  border-radius: ${radius.sm};
  font-size: 1rem;

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
  outline: 1px solid var(--primary);
  outline-offset: -1px;
  ${transition}

  @media ${device.md} {
    color: white;
    outline: 1px solid white;

    &:hover {
      color: var(--primary);
      background-color: white;
    }
  }
`;
