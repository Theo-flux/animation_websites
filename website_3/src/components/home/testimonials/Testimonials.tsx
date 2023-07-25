// import { testifiersData } from './data';
import {
  TestimonyContainer,
  Wrapper,
  Carousel,
  MainFigure,
  MainImage,
  NextFigure,
  Overlay,
  NextImage,
  TestimonyCard,
  SmallCircle,
  BigCircle,
  PaginationContainer,
  Group,
  Text,
  Title,
} from './testimonials.css';
import TestifierOne from '../../../assets/images/testifiers/testifier_1.png';
import TestifierTwo from '../../../assets/images/testifiers/testifier_2.jpg';

export default function Testimonials() {
  return (
    <TestimonyContainer>
      <Wrapper>
        <Carousel>
          <MainFigure>
            <MainImage src={TestifierOne} alt="main image" />
          </MainFigure>
          <NextFigure>
            <NextImage src={TestifierTwo} alt="main image" />
            <Overlay></Overlay>
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
          </Group>
          <PaginationContainer></PaginationContainer>
        </TestimonyCard>
      </Wrapper>
    </TestimonyContainer>
  );
}
