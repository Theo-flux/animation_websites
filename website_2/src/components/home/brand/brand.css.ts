import styled from 'styled-components';
import { device } from '../../../utils';

export const BrandContainer = styled.div`
  background-color: white;
  padding-bottom: 2rem;
`;

export const BrandGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;


  @media ${device.md} {
    gap: 4rem;
  }

  @media ${device.lg} {
    gap: 6rem;
  }

  @media ${device.xl} {
    gap: 8rem;
  }
`;

export const BrandFigure = styled.figure`
  /* border: 1px solid magenta; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BrandImg = styled.img`
  width: 50%;

  @media ${device.md} {
    width: 65%;
  }

  @media ${device.lg} {
    width: 80%;
  }

  @media ${device.xl} {
    width: 100%;
  }
`;
