import styled from 'styled-components';
import { device } from '../../../utils';

export const NavContainer = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 9;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

export const Logo = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: white;
  z-index: 3;

  @media ${device.md} {
    font-size: 1.25rem;
  }
`;

export const Hamburger = styled.div`
  width: 20px;
  height: 20px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    background-color: white;
  }

  @media ${device.md} {
    display: none;
  }
`;

export const TopLine = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 2px;
  margin-bottom: 0.15rem;
  transform-origin: center center;
`;

export const BottomLine = styled.div`
  width: 100%;
  border-radius: 2px;
  height: 2px;
  transform-origin: center center;
`;

export const ItemsContainer = styled.div`
  position: absolute;
  top: 0px;
  left: -900px;
  width: 100%;
  height: 100vh;
  padding: 0rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background-color: white;

  & > button {
    width: 100%;
  }

  & > button:first-of-type {
    margin-bottom: 1rem;
  }

  @media ${device.md} {
    padding: 0rem;
    width: fit-content;
    height: fit-content;
    background-color: transparent;
    position: static;
    flex-direction: row;
    justify-content: space-between;

    & > button {
      width: fit-content;
    }

    & > button:first-of-type {
      margin-bottom: 0rem;
      margin-right: 1rem;
    }
  }
`;

export const Item = styled.p`
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  color: black;
  margin-bottom: 2rem;

  @media ${device.md} {
    margin-bottom: 0rem;
    margin-right: 2rem;

    &:last-of-type {
      margin-right: 1rem;
    }
    color: white;
  }
`;
