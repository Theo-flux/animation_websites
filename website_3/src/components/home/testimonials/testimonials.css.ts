import styled from 'styled-components';
import { device } from '../../../utils';
import { BodyText, Heading2 } from '../../../shared';

export const TestimonyContainer = styled.section`
  width: 100%;
`;

export const Wrapper = styled.div`
  margin-left: 20px;

  @media ${device.md} {
    margin-left: 0px;
    height: 650px;
    position: relative;
  }
`;

export const Carousel = styled.div`
  /* border: 1px solid magenta; */
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0rem;

  @media ${device.md} {
    gap: 0rem;
  }
`;

export const MainFigure = styled.figure`
  width: 85%;
  height: 300px;
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;

  @media ${device.md} {
    width: 70%;
    height: 100%;
  }

  @media ${device.md} {
    width: 60%;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex: 1 0 100%;
  scroll-snap-align: start;
`;

export const NextFigure = styled.figure`
  width: 15%;
  height: 300px;
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;

  @media ${device.md} {
    width: 30%;
    height: 100%;
  }

  @media ${device.md} {
    width: 40%;
  }
`;

export const NextFigureWrapper = styled.div`
  position: relative;
  flex: 1 0 100%;
  scroll-snap-align: start;
`;

export const NextImage = styled.img`
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: #2c5a6e;
  mix-blend-mode: multiply;
`;

export const TestimonyCard = styled.div`
  position: relative;
  margin-top: 20px;
  width: 85%;
  height: 300px;
  background-color: var(--S300);
  overflow: hidden;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media ${device.md} {
    margin: 0px;
    position: absolute;
    z-index: 4;
    top: 0px;
    right: 0px;
    width: 400px;
    height: 100%;
  }

  @media ${device.lg} {
    right: 150px;
    width: 400px;
  }

  @media ${device.xl} {
    right: 240px;
    width: 440px;
  }
`;

export const SmallCircle = styled.div`
  position: absolute;
  top: 10%;
  right: 10%;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border: 2px solid white;
`;

export const BigCircle = styled.div`
  position: absolute;
  bottom: -50%;
  right: -5%;
  width: 200px;
  height: 200px;
  border-radius: 200px;
  border: 2px solid white;

  @media ${device.md} {
    bottom: -10%;
    right: -5%;
  }
`;

export const Group = styled.div`
  width: 90%;
  /* border: 1px solid magenta; */
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
`;

export const InnerGroup = styled.div`
  flex: 1 0 100%;
  scroll-snap-align: start;
`;

export const Title = styled(Heading2)`
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  color: white;
`;

export const Text = styled(BodyText)`
  color: white;
`;

export const PaginationContainer = styled.div`
  align-self: flex-start;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 115px;
`;

type TIndicatorProps = {
  active: number;
  num: number;
};

export const Indicator = styled.div<TIndicatorProps>`
  cursor: pointer;
  width: 24px;
  height: 4px;
  background-color: ${props =>
    props.active == props.num ? `#FFFFFF` : `#FFFFFF50`};
`;
