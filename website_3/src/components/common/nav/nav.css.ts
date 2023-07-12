import styled from 'styled-components';
import { Logo } from '../../../shared';
import { device, transition } from '../../../utils';

export const NavContainer = styled.nav`
  background-color: white;
  position: fixed;
  /* top: -100px; */
  /* opacity: 0; */
  width: 100%;
  z-index: 9;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

export const Hamburger = styled.div`
  width: 15px;
  height: 20px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid magenta; */

  & > div {
    background-color: var(--S300);
  }

  @media ${device.lg} {
    display: none;
  }
`;

export const TopLine = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 2px;
  transform-origin: 50% 50%;
`;

export const MidLine = styled.div`
  width: 100%;
  border-radius: 2px;
  height: 2px;
`;

export const BottomLine = styled.div`
  width: 100%;
  border-radius: 2px;
  height: 2px;
  transform-origin: 20% -20%;
`;

export const DesktopItemsContainer = styled.div`
  display: none;

  @media ${device.lg} {
    padding: 0rem;
    width: fit-content;
    height: fit-content;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > button {
      width: fit-content;
    }

    & > button:first-of-type {
      margin-bottom: 0rem;
      margin-right: 1rem;
    }
  }
`;

export const MobileItemsContainer = styled.div`
  position: absolute;
  top: 0px;
  left: -1400px;
  width: 100%;
  height: 100vh;
  padding: 6rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 2;
  background-color: var(--S500);

  & > button {
    width: 100%;
  }

  & > button:first-of-type {
    margin-bottom: 1rem;
  }
`;

export const Item = styled.p`
  position: relative;
  width: fit-content;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  font-family: Plus Jakarta Sans;
  color: white;
  margin-bottom: 1rem;
  /* border: 1px solid red; */

  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0px;
    height: 1px;
    background-color: black;
    ${transition}
  }

  &:hover::after {
    width: 100%;
  }

  @media ${device.lg} {
    font-size: 0.875rem;
    font-weight: 400;
    margin-bottom: 0rem;
    margin-right: 2rem;

    &:last-of-type {
      margin-right: 1rem;
    }
    color: black;

    &::after {
      background-color: black;
    }
  }
`;

export const NavLogo = styled(Logo)`
  color: black;
`;

export const MobileOthers = styled.div`
  margin: 1rem 0rem 4rem 0rem;
`;

export const MobileOtherItem = styled.p`
  color: #ffffff87;
  font-size: 16px;
  font-family: Plus Jakarta Sans;
  font-weight: 300;

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`;

export const MobileInfo = styled.small`
  width: 100%;
  max-width: 320px;
  color: var(--uicolor, #fefefe);
  font-weight: 300;
  font-size: 10px;
  font-family: Manrope;
  letter-spacing: -0.11px;
`;
