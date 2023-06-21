import styled from 'styled-components';
import { device } from '../../utils';

export const HeroContainer = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-gradient);
`;

export const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid magenta;

  @media ${device.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const HeroInfo = styled.div`
  color: white;
  width: 95%;
  margin: 0 auto;
  border: 1px solid magenta;
  margin-left: 2rem;

  @media ${device.md} {
    width: 40%;
  }
`;
export const HeroFigure = styled.figure`
  width: 100%;

  @media ${device.md} {
    width: 50%;
    position: absolute;
    bottom: 0px;
    right: -100px;
    overflow: hidden;
  }
`;
export const HeroImage = styled.img`
  width: 100%;
`;
