import React from 'react';
import { testifiersData } from './data';
import {
  MainFigure,
  MainImage,
  NextFigure,
  NextImage,
  TestifierCard,
  TestimonyContainer,
  TestimonyWrapper,
  Overlay,
  Content,
} from './testimonials.css';

export default function Testimonials() {
  return (
    <TestimonyContainer>
      {/* <TestimonyWrapper>
        {testifiersData.map((testifier, idx) => {
          const { mainImage, nextImage } = testifier;
          return (
            <Content key={idx}>
              <MainFigure>
                <MainImage src={mainImage} alt="main" />
              </MainFigure>
              <NextFigure>
                <Overlay></Overlay>
                <NextImage src={nextImage} alt="next" />
              </NextFigure>
            </Content>
          );
        })}

        <TestifierCard>card</TestifierCard>
      </TestimonyWrapper> */}
      Testimonials
    </TestimonyContainer>
  );
}
