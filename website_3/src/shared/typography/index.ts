import styled from 'styled-components';
import { device } from '../../utils';

export const Heading1 = styled.h1`
  font-family: Plus Jakarta Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media ${device.md} {
    font-size: 52px;
  }
`;

export const Heading2 = styled.h2`
  text-align: center;
  font-family: Plus Jakarta Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media ${device.md} {
    font-size: 32px;
  }
`;

export const Heading3 = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  color: black;
`;

export const Heading5 = styled.h5`
  color: black;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
`;

export const Heading6 = styled.h6`
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  color: #fff;
`;

export const BodyText = styled.p`
  color: #767475;
  font-size: 16px;
  font-weight: 300;
  line-height: 160%;
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

export const StyledSmallText = styled.p`
  color: var(--S400);
  font-family: Plus Jakarta Sans;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;


