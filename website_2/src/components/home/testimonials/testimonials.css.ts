import styled from 'styled-components';
import { device } from '../../../utils';
import { Heading2, Heading5, BodyText } from '../../../shared';

export const TestimonialContainer = styled.div`
  width: 100%;
  padding: 4rem 0rem;
`;

export const TopContainer = styled.div``;

export const BottomContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 360px;
  background: var(--primary-gradient);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  /* border: 1px solid magenta; */

  @media ${device.md} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const BgFigure = styled.figure`
  position: absolute;
  right: -50px;
  bottom: -100px;
  width: 50%;

  @media ${device.md} {
    top: -50px;
    right: -200px;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const Info = styled.div`
  max-width: 356px;
  margin-bottom: 4rem;
  /* border: 1px solid magenta; */

  @media ${device.md} {
    margin-bottom: 0rem;
    height: 100%;
  }
`;

export const Title = styled(Heading2)`
  text-align: left;
  color: white;
  margin-bottom: 0.5rem;
`;

export const SubTitle = styled(BodyText)`
  font-size: 0.875rem;
  text-align: left;
  max-width: 579px;
  color: white;
  margin-bottom: 1rem;
`;

export const Row = styled.div``;

export const TeamFigure = styled.figure`
  position: relative;
  top: 0px;
`;

export const TeamImg = styled.img`
  position: absolute;

  &:nth-of-type(2) {
    left: 25px;
  }
  &:nth-of-type(3) {
    left: 50px;
  }
  &:nth-of-type(4) {
    left: 75px;
  }
  &:nth-of-type(5) {
    left: 100px;
  }
`;
