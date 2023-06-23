import {
  TestimonialContainer,
  TopContainer,
  BottomContainer,
  InnerWrapper,
  BgFigure,
  Img,
  Info,
  Title,
  SubTitle,
  Row,
  TeamFigure,
  TeamImg,
  Slider,
  Slide,
  SlideTop,
  SlideBottom,
  SlideRow,
  SlideAvatar,
  SlideAbout,
  SlideName,
  SlideRole,
  RatingFlex,
  TopFlex,
  Pagination,
  SlideComment,
  StyledRate,
  Page,
  ArrowContainer,
  StyledNextArrow,
  StyledPrevArrow,
} from './testimonials.css';
import { CTABtn, Div } from '../../../shared';
import Circles from '../../../assets/images/circulars.svg';
import Member from '../../../assets/images/team/Item.svg';
import Member1 from '../../../assets/images/team/Item-1.svg';
import Member2 from '../../../assets/images/team/Item-2.svg';
import Member3 from '../../../assets/images/team/Item-3.svg';
import Member4 from '../../../assets/images/team/Item-4.svg';

const testimonies = [
  {
    name: 'Purity Yinka',
    occupation: 'CEO Teddy Technologies',
    avatar: Member,
    rating: 5,
    comment: `“With ****, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience.”`,
  },

  {
    name: 'Purity Yinka',
    occupation: 'CEO Teddy Technologies',
    avatar: Member1,
    rating: 5,
    comment: `“With ****, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience.”`,
  },

  {
    name: 'Purity Yinka',
    occupation: 'CEO Teddy Technologies',
    avatar: Member2,
    rating: 5,
    comment: `“With ****, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience.”`,
  },
  {
    name: 'Purity Yinka',
    occupation: 'CEO Teddy Technologies',
    avatar: Member3,
    rating: 5,
    comment: `“With ****, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience.”`,
  },

  {
    name: 'Purity Yinka',
    occupation: 'CEO Teddy Technologies',
    avatar: Member4,
    rating: 5,
    comment: `“With ****, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience.”`,
  },
];

export default function Testimonial() {
  return (
    <TestimonialContainer>
      <Div>
        <TopContainer>
          <Info maxWidth="463px">
            <Title color="black" textAlign="center">
              Powering the growth of 100+ business & retailers in your City.
            </Title>
            <SubTitle color="var(--N200)" textAlign="center">
              From single store, startups, to large multi-store brands.
            </SubTitle>
          </Info>

          <Slider>
            {testimonies.map((testimony, index) => {
              const { avatar, rating, occupation, comment, name } = testimony;
              const arr = [];

              for (let i = 0; i < rating; i++) {
                arr.push('');
              }
              return (
                <Slide key={index}>
                  <SlideTop>
                    <TopFlex>
                      {/* <Quote>"</Quote> */}
                      <RatingFlex>
                        {arr.map((_, index) => {
                          return <StyledRate key={index} />;
                        })}
                      </RatingFlex>
                    </TopFlex>
                    <SlideComment>{comment}</SlideComment>
                  </SlideTop>
                  <SlideBottom>
                    <SlideRow>
                      <SlideAvatar src={avatar} alt="avatar" />
                      <SlideAbout>
                        <SlideName>{name}</SlideName>
                        <SlideRole>{occupation}</SlideRole>
                      </SlideAbout>
                    </SlideRow>
                  </SlideBottom>
                </Slide>
              );
            })}

            <Pagination>
              {testimonies.map((_, index) => {
                return <Page key={index}></Page>;
              })}
            </Pagination>

            <ArrowContainer>
              <StyledPrevArrow />
            </ArrowContainer>

            <ArrowContainer active={true}>
              <StyledNextArrow />
            </ArrowContainer>
          </Slider>
        </TopContainer>

        <BottomContainer>
          <InnerWrapper>
            <Info>
              <Title>Grow your business presence on social media</Title>
              <SubTitle>Join with more 1200+ happy customers</SubTitle>

              <Row>
                <TeamFigure>
                  <TeamImg src={Member} alt="Member" />
                  <TeamImg src={Member1} alt="Member1" />
                  <TeamImg src={Member2} alt="Member2" />
                  <TeamImg src={Member3} alt="Member3" />
                  <TeamImg src={Member4} alt="Member4" />
                </TeamFigure>
              </Row>
            </Info>

            <CTABtn>Try for free</CTABtn>
          </InnerWrapper>
          <BgFigure>
            <Img src={Circles} alt="circles" />
          </BgFigure>
        </BottomContainer>
      </Div>
    </TestimonialContainer>
  );
}
