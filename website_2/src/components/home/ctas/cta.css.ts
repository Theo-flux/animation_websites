import styled from 'styled-components';
import { FiCheckCircle } from 'react-icons/fi';
import { Heading2, Heading5, BodyText } from '../../../shared';
import { device } from '../../../utils';

type WrapperProps = {
  bgColor: string;
};

export const CtaContainer = styled.div``;

export const Wrapper = styled.div<WrapperProps>`
  padding: 4rem 0rem;
  ${props => `background-color: ${props.bgColor}`};
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  /* border: 1px solid magenta; */
  @media ${device.lg} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  @media ${device.lg} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledCheckIcon = styled(FiCheckCircle)`
  color: black;
  font-weight: 700;
`;

export const Info = styled.div`
  width: 100%;
  max-width: 465px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.lg} {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const PhoneFigure = styled.figure`
  position: relative;
  top: 0;
  left: 0;
  /* background: linear-gradient(270deg, rgba(234, 239, 241, 0.34) 0%, white 100%); */
  background: linear-gradient(270deg, #0fac8114 0%, #ffffff14 100%);
  width: 300px;
  height: 300px;
  border-radius: 100%;
  margin-bottom: 4rem;

  & > img {
    position: absolute;
    width: 50%;
    object-fit: contain;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  }

  & > img:first-of-type {
    top: 65%;
    left: 30%;
    transform: translate(-50%, -50%);
  }

  & > img:last-of-type {
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
  }

  @media ${device.md} {
    width: 300px;
    height: 300px;
    margin-bottom: 0rem;
  }

  @media ${device.lg} {
    width: 500px;
    height: 500px;
  }

  @media ${device.xl} {
    width: 600px;
    height: 600px;
  }
`;

export const PhoneImg1 = styled.img``;

export const PhoneImg2 = styled.img``;

type TTitleProps = {
  color?: string;
};

export const Title = styled(Heading2)<TTitleProps>`
  text-align: center;
  color: ${props => (props.color ? `${props.color}` : `va(--N200)`)};
  margin-bottom: 1rem;

  @media ${device.lg} {
    text-align: left;
  }
`;

export const SubTitle = styled(BodyText)`
  text-align: center;
  max-width: 579px;
  color: var(--N200);
  margin-bottom: 2rem;

  @media ${device.lg} {
    text-align: left;
  }
`;
