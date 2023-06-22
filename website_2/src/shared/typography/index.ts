import styled from 'styled-components';
import { device } from '../../utils';

export const StyledHeadingXL = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  color: black;

  @media ${device.md} {
    font-size: 64px;
  }
`;

export const StyledHeadingL = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: black;
`;

export const StyledHeadingMD = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  color: black;
`;

export const Heading6 = styled.h6`
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  color: #fff;
`;

export const StyledBodyL = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 23px;
  color: black;
`;

export const StyledBodyMD = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: black;
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
