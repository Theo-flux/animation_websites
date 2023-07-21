import styled from 'styled-components';
import { radius } from '../../utils';
import { RiAppleFill } from 'react-icons/ri';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

export const DownloadBtn = styled.button`
  cursor: pointer;
  width: fit-content;
  background-color: black;
  color: white;
  border: 1px solid white;
  border-radius: ${radius.md};
  padding: 0.25rem;
  outline: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledGoogleIcon = styled(RiAppleFill)`
  font-size: 2rem;
`;

export const StyledAppleIcon = styled(IoLogoGooglePlaystore)`
  font-size: 2rem;
`;

export const Col = styled.div`
  margin-left: 0.35rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Small = styled.small`
  font-size: 0.575rem;
`;

export const Title = styled.p`
  font-size: 1rem;
`;
