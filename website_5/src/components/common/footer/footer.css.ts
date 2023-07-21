import styled from 'styled-components';
import { device } from '../../../utils';
import { MdOutlineMail } from 'react-icons/md';
import { AiOutlinePhone } from 'react-icons/ai';
import { BodyText, Heading2 } from '../../../shared';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: var(--S300);
  /* border: 1px solid magenta; */
  padding: 4rem 0rem;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  @media ${device.md} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  & > div:first-of-type {
    margin-bottom: 2rem;
  }
`;

export const Title = styled(Heading2)`
  color: #44331e;
  text-align: left;
  margin-bottom: 1rem;
`;

export const Text = styled(BodyText)`
  color: white;
  font-weight: 500;
`;

export const Top = styled.div`
  width: 322px;
`;

export const Bottom = styled.div`
  width: fit-content;
  color: white;
`;

export const StyledMailIcon = styled(MdOutlineMail)`
  font-size: 1rem;
  margin-right: 0.5rem;

  @media ${device.md} {
    font-size: 1.5rem;
  }
`;

export const StyledPhoneIcon = styled(AiOutlinePhone)`
  font-size: 1rem;
  margin-right: 0.5rem;

  @media ${device.md} {
    font-size: 1.5rem;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`;

export const FooterBottom = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border-top: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
