import styled from 'styled-components';
import { device } from '../../../utils';
import { Heading2 } from '../../../shared';

export const AdvantageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;

  @media ${device.md} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0fr;
  }
`;

export const Content = styled.div`
  background-color: var(--primary);
  width: 100%;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  @media ${device.md} {
    grid-row: none;
  }
`;

export const ContentHead = styled(Heading2)`
  margin-bottom: 2rem;
`;

export const Figure = styled.div`
  width: 100%;
  /* border: 1px solid magenta; */
  grid-row: 1;

  @media ${device.md} {
    grid-row: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Ul = styled.ul`
  list-style: inside;
`;

export const Li = styled.li`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 1rem;

  @media ${device.md} {
    font-size: 20px;
  }
`;
