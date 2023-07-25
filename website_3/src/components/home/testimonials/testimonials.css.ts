import styled from 'styled-components';
import { device } from '../../../utils';
import { BodyText, Heading3 } from '../../../shared';

export const TestimonyContainer = styled.section`
  width: 100%;
  /* padding: 4rem 0rem; */
  /* border: 1px solid magenta; */
`;

export const Wrapper = styled.div`
  /* border: 1px solid magenta; */
  /* height: auto; */
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
  /* gap: 1rem; */
`;

export const MainFigure = styled.figure`
  width: 80%;
  height: 247px;

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
`;

export const NextFigure = styled.figure`
  position: relative;
  width: 20%;
  height: 247px;

  @media ${device.md} {
    width: 30%;
    height: 100%;
  }

  @media ${device.md} {
    width: 40%;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: #2c5a6e70;
  mix-blend-mode: multiply;
`;

export const NextImage = styled.img`
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TestimonyCard = styled.div`
  position: relative;
  margin-top: 20px;
  width: 80%;
  height: 240px;
  background-color: var(--S300);
  overflow: hidden;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

export const Group = styled.div``;

export const Title = styled(Heading3)`
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  color: white;
`;

export const Text = styled(BodyText)`
  color: white;
`;

export const PaginationContainer = styled.div``;
