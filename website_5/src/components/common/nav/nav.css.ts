import styled from 'styled-components';
import { Logo } from '../../../shared';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { device, transition } from '../../../utils';

export const NavContainer = styled.nav`
  background: rgba(255, 255, 255, 0.21);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(14.2px);
  -webkit-backdrop-filter: blur(14.2px);
  position: fixed;
  top: -100px;
  opacity: 0;
  width: 100%;
  z-index: 9;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

export const NavLogo = styled(Logo)`
  color: black;
`;

export const IconWrapper = styled.div`
  font-size: 1rem;
  /* border: 1px solid magenta; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;

  @media ${device.md} {
    font-size: 1.5rem;
    width: 100px;
  }
`;

export const StyledTwitterIcon = styled(BsTwitter)`
  cursor: pointer;
  ${transition}
  &:hover {
    color: white;
  }
`;

export const StyledLinkedInIcon = styled(BsLinkedin)`
  cursor: pointer;
  ${transition}
  &:hover {
    color: white;
  }
`;

export const StyledInstagramIcon = styled(RiInstagramFill)`
  cursor: pointer;
  ${transition}
  &:hover {
    color: white;
  }
`;
