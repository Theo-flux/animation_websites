import styled from 'styled-components';
import { device, transition } from '../../../utils';
import { Heading1, Heading2, BodyText } from '../../../shared';
import { RiAddFill, RiSubtractLine } from 'react-icons/ri';

export const ProductContainer = styled.section`
  padding: 4rem 0rem;
`;

export const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.md} {
    & > div,
    & > figure {
      width: 40%;
    }
  }

  @media ${device.lg} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > div,
    & > figure {
      width: 40%;
    }
  }
`;

export const Bottom = styled.div``;

export const ProductFigure = styled.figure`
  width: 100%;
  /* border: 1px solid magenta; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 50%;

  @media ${device.md} {
    width: 100%;
  }

  @media ${device.lg} {
    width: 80%;
  }
`;

export const ProductInfo = styled.div`
  width: 100%;
  margin-top: 2rem;

  @media ${device.lg} {
    margin: 0px;
  }
`;

export const Title = styled(BodyText)`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const Text = styled(BodyText)``;

export const ProductName = styled(Heading2)`
  text-align: center;
  color: var(--N600);

  @media ${device.lg} {
    text-align: left;
  }
`;

export const ProductPrice = styled(Heading1)`
  text-align: center;
  color: var(--primary-dark);

  @media ${device.lg} {
    text-align: left;
  }
`;

export const ProductDescription = styled(BodyText)`
  text-align: center;
  /* border: 1px solid magenta; */
  width: 100%;
  margin: 1rem 0rem;

  @media ${device.lg} {
    text-align: left;
    max-width: 467px;
  }
`;

export const ProductIngredient = styled.div`
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  padding: 1rem;
  border: 1px solid var(--primary-light);
`;

export const ProductInstructions = styled.div`
  margin: 0.5rem 0rem;
  padding: 1rem;
  border: 1px solid var(--primary-light);
`;

export const ProductQty = styled.div`
  margin: 0.5rem 0rem;
  height: fit-content;
  padding: 1rem;
  border-bottom: 1px solid var(--primary-dark);
  background-color: var(--primary-light);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > ${Title} {
    margin: 0rem;
  }

  @media ${device.md} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Row = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > ${Title} {
    margin: 0rem;
  }
`;

type TInstructionTextProps = {
  isOpen: boolean;
};

export const InstructionText = styled(Text)<TInstructionTextProps>`
  transform: ${props => (props.isOpen ? `scaleY(1)` : `scaleY(0)`)};
  transform-origin: top;
  height: fit-content;
  margin: 0rem;
  ${transition};
`;

export const InstructionDrawer = styled.div`
  margin-top: 1rem;
  height: fit-content;
`;

export const StyledAddIcon = styled(RiAddFill)`
  color: var(--primary-gray);
  font-size: 1.5rem;
  cursor: pointer;
`;

export const StyledSubtractIcon = styled(RiSubtractLine)`
  color: var(--primary-gray);
  font-size: 1.5rem;
  cursor: pointer;
`;

export const QtyRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 1rem 0rem;

  @media ${device.md} {
    margin: 0rem;
  }
`;

export const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: white;
  color: var(--primary);
  font-weight: 600;
  margin: 0rem 0.5rem;
`;
