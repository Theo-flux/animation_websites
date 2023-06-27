import styled from 'styled-components';
import { device, transition } from '../../../utils';
import { Heading2, BodyText, Heading5 } from '../../../shared';
import { TbStarFilled } from 'react-icons/tb';
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from 'react-icons/md';

type TTextProps = {
  color?: string;
  textAlign?: string;
};

type TInfoProps = {
  maxWidth?: string;
};

type TPageProps = {
  index: number;
  currentSlide: number;
};

export const TestimonialContainer = styled.div`
  width: 100%;
  padding: 4rem 0rem;
`;

export const TopContainer = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid magenta; */

  @media ${device.lg} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

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

export const Info = styled.div<TInfoProps>`
  width: 100%;
  margin-bottom: 4rem;
  /* border: 1px solid magenta; */

  @media ${device.md} {
    max-width: ${props => (props.maxWidth ? `${props.maxWidth}` : `356px`)};
    margin-bottom: 0rem;
    height: 100%;
  }
`;

export const Title = styled(Heading2)<TTextProps>`
  text-align: ${props => (props.textAlign ? `${props.textAlign}` : `left`)};
  color: ${props => (props.color ? `${props.color}` : `white`)};
  width: 100%;
  margin-bottom: 0.75rem;

  @media ${device.md} {
    text-align: left;
  }
`;

export const SubTitle = styled(BodyText)<TTextProps>`
  font-size: 0.875rem;
  text-align: ${props => (props.textAlign ? `${props.textAlign}` : `left`)};
  width: 100%;
  color: ${props => (props.color ? `${props.color}` : `white`)};
  margin-bottom: 1rem;

  @media ${device.md} {
    text-align: left;
  }
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

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 520px;
  /* border: 1px solid magenta; */
`;

// Testimony styles
export const Slider = styled.div`
  position: relative;
  width: 100%;
  max-width: 520px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  height: 320px;
  /* border: 1px solid magenta; */
`;

export const Slide = styled.div`
  position: absolute;
  flex-basis: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  height: 320px;
  padding: 18px;
  transition: all 0.5s;
  background-color: white;
  /* border: 1px solid magenta; */

  @media ${device.base} {
    padding: 24px;
  }
`;

export const SlideTop = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  /* border: 1px solid magenta; */

  @media ${device.base} {
    margin-bottom: 1rem;
  }
`;

export const SlideBottom = styled.div`
  width: 100%;
  /* border: 1px solid magenta; */
`;

export const SlideRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SlideAvatar = styled.img`
  width: 50px;
  margin-right: 1rem;
`;

export const SlideAbout = styled.div``;

export const Quote = styled.p`
  color: var(--primary);
  font-size: 36px;
  font-family: 'Plus Jakarta Sans';
`;

export const SlideName = styled(Heading5)`
  color: var(--primary);
`;

export const SlideRole = styled(BodyText)`
  color: var(--N200);
`;

export const SlideComment = styled(BodyText)`
  color: var(--N200);
  font-size: 1rem;
  font-weight: 200;
  font-family: 'Plus Jakarta Sans';
  font-style: italic;
  line-height: 32px;
  max-width: 442px;
`;

export const TopFlex = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.75rem;
`;

export const RatingFlex = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledRate = styled(TbStarFilled)`
  color: #faad13;
  font-size: 1.2rem;
  margin-right: 0.35rem;
`;

export const SliderPeripherals = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid magenta; */
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid magenta; */
`;

export const Page = styled.div<TPageProps>`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: ${props =>
    props.index == props.currentSlide
      ? `var(--primary)`
      : `var(--foundation-primary-light, #e7f7f2)`};
  margin-right: 0.35rem;
  ${transition}
`;

type TArrowProps = {
  active?: boolean;
};

export const StyledNextArrow = styled(MdOutlineArrowForwardIos)`
  color: var(--primary);
`;

export const StyledPrevArrow = styled(MdOutlineArrowBackIos)`
  color: var(--primary);
`;

export const ArrowContainer = styled.div<TArrowProps>`
  cursor: pointer;
  background-color: ${props => (props.active ? `var(--primary)` : `white`)};

  & > ${StyledNextArrow}, & > ${StyledPrevArrow} {
    color: ${props => (props.active ? `white` : `var(--primary)`)};
  }

  width: 40px;
  height: 40px;
  border-radius: 100%;
  font-size: 1.2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid magenta; */

  &:hover {
    background-color: var(--primary);
  }

  &:hover ${StyledNextArrow}, &:hover ${StyledPrevArrow} {
    color: white;
  }
`;
