import styled from 'styled-components';
import { FiCheckCircle } from 'react-icons/fi';
import { Heading2, Heading5, BodyText } from '../../../shared';
import { device } from '../../../utils';

export const CtaContainer = styled.div`
  background-color: white;
  padding: 4rem 0rem;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;

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

  @media ${device.lg} {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const Figure = styled.figure`
  background: linear-gradient(270deg, rgba(234, 239, 241, 0.34) 0%, white 100%);
  width: 200px;
  height: 200px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.md} {
    width: 300px;
    height: 300px;
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

export const Img = styled.img`
  width: 100%;
`;

export const PhoneFigure = styled.figure`
  position: relative;
  top: 0;
  background: linear-gradient(270deg, rgba(234, 239, 241, 0.34) 0%, white 100%);
  width: 200px;
  height: 200px;
  border-radius: 100%;

  & > img {
    position: absolute;
    width: 40%;
    object-fit: contain;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media ${device.md} {
    width: 300px;
    height: 300px;

    & > img {
    }
  }

  @media ${device.lg} {
    width: 500px;
    height: 500px;

    & > img {
    }
  }

  @media ${device.xl} {
    width: 600px;
    height: 600px;
  }
`;

export const PhoneImg1 = styled.img``;

export const PhoneImg2 = styled.img`
  rotate: -30deg;
  transform-origin: -30px 70px;

  @media ${device.md} {
    transform-origin: -50px 90px;
  }

  @media ${device.lg} {
    transform-origin: -100px 180px;
  }

  @media ${device.xl} {
    transform-origin: -100px 250px;
  }
`;

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
