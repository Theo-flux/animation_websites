import styled from 'styled-components';
import { transition } from '../../../utils';

type ProgressProp = {
  width: number;
};

export const PreloaderContainer = styled.div`
  position: fixed;
  z-index: 10;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Progress = styled.div<ProgressProp>`
  position: absolute;
  width: ${props => `${props.width}%`};
  left: 0px;
  height: 1px;
  background-color: var(--N40);
  ${transition}
`;

export const Follow = styled.div`
  position: absolute;
  z-index: 2;
  width: 0px;
  height: 1px;
  background-color: var(--primary-dark);
`;

export const Logo = styled.h2`
  font-weight: 800;
  font-size: 1.2rem;
`;

export const Counter = styled.h4`
  font-weight: 200;
  margin-bottom: 1.5rem;
`;
