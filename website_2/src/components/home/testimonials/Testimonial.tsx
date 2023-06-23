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
} from './testimonials.css';
import { BodyText, CTABtn, Div } from '../../../shared';
import Circles from '../../../assets/images/circulars.svg';
import Member from '../../../assets/images/team/Item.svg';
import Member1 from '../../../assets/images/team/Item-1.svg';
import Member2 from '../../../assets/images/team/Item-2.svg';
import Member3 from '../../../assets/images/team/Item-3.svg';
import Member4 from '../../../assets/images/team/Item-4.svg';

export default function Testimonial() {
  return (
    <TestimonialContainer>
      <Div>
        <TopContainer>Top</TopContainer>

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
