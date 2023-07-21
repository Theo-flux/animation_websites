import styled from 'styled-components';
import { device, transition } from '../../utils';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaCartShopping } from 'react-icons/fa6';

const ButtonReset = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 1rem;
  border-radius: 100px;
  font-size: 1rem;
  /* text-transform: uppercase; */
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
  color: var(--white);
  background-color: var(--S300);
  ${transition}

  &:hover {
    color: var(--S300);
    background-color: var(--S50);
  }
`;

export const CTABtnOutline = styled(ButtonReset)`
  padding: 1rem 2rem;
  color: var(--white);
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

export const StyledArrowIcon = styled(HiArrowNarrowRight)``;

export const StyledCartIcon = styled(FaCartShopping)``;

export const ButtonIconContainer = styled(ButtonReset)`
  padding: 1rem 2rem;
  color: white;
  background-color: var(--primary);
  ${transition}

  &:hover {
    color: var(--primary-dark);
    background-color: #7F452A50;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BtnText = styled.p`
  margin-right: 1rem;
`;
