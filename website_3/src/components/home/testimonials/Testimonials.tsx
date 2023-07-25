import { useRef, useEffect, useState } from 'react';
import { testifiersData, testifiersMain, testifiersNext } from './data';
import {
  TestimonyContainer,
  Wrapper,
  Carousel,
  MainFigure,
  MainImage,
  NextFigure,
  NextFigureWrapper,
  Overlay,
  NextImage,
  TestimonyCard,
  SmallCircle,
  BigCircle,
  PaginationContainer,
  Group,
  Text,
  Title,
  Indicator,
} from './testimonials.css';

export default function Testimonials() {
  //TODO: Testimonial Slider effect
  const mainFigureRef = useRef<HTMLElement>(null);
  const nextFigureRef = useRef<HTMLElement>(null);
  const mainSlideRef = useRef<Array<HTMLImageElement>>([]);
  const nextSlideRef = useRef<Array<HTMLImageElement>>([]);
  const [activeNum, setActiveNum] = useState(0);
  let mainSlideWidth = 0;
  let nextSlideWidth = 0;

  if (mainFigureRef.current && nextFigureRef.current) {
    mainSlideWidth = mainFigureRef.current.children[0].clientWidth;
    nextSlideWidth = nextFigureRef.current.children[0].clientWidth;
  }

  const handleSlide = (arg: number) => {
    setActiveNum(arg);

    if (mainFigureRef.current) {
      mainFigureRef.current.scrollLeft = activeNum * mainSlideWidth;
    }

    if (nextFigureRef.current) {
      nextFigureRef.current.scrollLeft = activeNum * nextSlideWidth;
    }
  };

  return (
    <TestimonyContainer>
      <Wrapper>
        <Carousel>
          <MainFigure ref={mainFigureRef}>
            {testifiersMain.map((main, index) => {
              return (
                <MainImage
                  key={index}
                  ref={(element: HTMLImageElement) =>
                    mainSlideRef.current.push(element!)
                  }
                  src={main}
                  alt="main image"
                />
              );
            })}
          </MainFigure>
          <NextFigure ref={nextFigureRef}>
            {testifiersNext.map((next, index) => {
              return (
                <NextFigureWrapper>
                  <Overlay></Overlay>
                  <NextImage
                    key={index}
                    ref={(element: HTMLImageElement) =>
                      nextSlideRef.current.push(element!)
                    }
                    src={next}
                    alt="next image"
                  />
                </NextFigureWrapper>
              );
            })}
          </NextFigure>
        </Carousel>
        <TestimonyCard>
          <SmallCircle></SmallCircle>
          <BigCircle></BigCircle>
          <Group>
            <Text>
              I used nearly every business platform in the market and I always
              come back to Brand Name. It provides the most user-friendly
              interface and has the in-depth Marketing I need.
            </Text>

            <Title>Maryjane Awe</Title>
            <Text>Lead Facilitator Teddy</Text>

            <PaginationContainer>
              {testifiersNext.map((_, index) => {
                return (
                  <Indicator
                    onClick={() => handleSlide(index)}
                    active={activeNum}
                    num={index}
                    key={index}
                  ></Indicator>
                );
              })}
            </PaginationContainer>
          </Group>
        </TestimonyCard>
      </Wrapper>
    </TestimonyContainer>
  );
}
