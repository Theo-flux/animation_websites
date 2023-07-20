import styled from 'styled-components';
import { device } from '../../../utils';

export const TestimonyContainer = styled.section`
  width: fit-content;
`;

export const TestimonyWrapper = styled.div`
  min-width: 100%;
  height: 274px;
  margin: auto;
  position: relative;
  overflow: hidden;

  @media ${device.lg} {
    height: 650px;
  }
`;

export const Content = styled.div`
  width: 100%;
  position: absolute;
  left: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const MainFigure = styled.figure``;

export const MainImage = styled.img``;

export const NextFigure = styled.figure`
  position: relative;
`;

export const NextImage = styled.img``;

export const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: #2c5a6e;
  mix-blend-mode: multiply;
`;

export const TestifierCard = styled.div``;
