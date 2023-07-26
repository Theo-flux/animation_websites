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
  InnerGroup,
  Text,
  Title,
  Indicator,
} from './testimonials.css';

export default function Testimonials() {
  //TODO: Auto animate the carousels.
  const mainFigureRef = useRef<HTMLElement>(null);
  const nextFigureRef = useRef<HTMLElement>(null);
  const groupDivRef = useRef<HTMLDivElement>(null);
  const mainSlideRef = useRef<Array<HTMLImageElement>>([]);
  const nextSlideRef = useRef<Array<HTMLImageElement>>([]);
  const groupSlideRef = useRef<Array<HTMLDivElement>>([]);
  const [activeNum, setActiveNum] = useState(0);
  let mainSlideWidth = 0;
  let nextSlideWidth = 0;
  let groupSlideWidth = 0;

  if (
    mainSlideRef.current.length > 0 &&
    nextSlideRef.current.length > 0 &&
    groupSlideRef.current.length > 0
  ) {
    mainSlideWidth = mainSlideRef.current[0].clientWidth;
    nextSlideWidth = nextSlideRef.current[0].clientWidth;
    groupSlideWidth = groupSlideRef.current[0].clientWidth;
  }

  function handleSlide(arg: number) {
    setActiveNum(arg);

    if (mainFigureRef.current) {
      mainFigureRef.current.scrollLeft = activeNum * mainSlideWidth;
    }

    if (nextFigureRef.current) {
      nextFigureRef.current.scrollLeft = activeNum * nextSlideWidth;
    }

    if (groupDivRef.current) {
      groupDivRef.current.scrollLeft = activeNum * groupSlideWidth;
    }
  }

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
          <Group ref={groupDivRef}>
            {testifiersData.map((datum, index) => {
              const { text, name, position } = datum;
              return (
                <InnerGroup
                  ref={(element: HTMLDivElement) =>
                    groupSlideRef.current.push(element!)
                  }
                  key={index}
                >
                  <Text>{text}</Text>

                  <Title>{name}</Title>
                  <Text>{position}</Text>
                </InnerGroup>
              );
            })}
          </Group>

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
        </TestimonyCard>
      </Wrapper>
    </TestimonyContainer>
  );
}
