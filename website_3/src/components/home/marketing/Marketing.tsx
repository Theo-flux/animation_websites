import { Div } from '../../../shared';
import {
  MarketingContainer,
  Wrapper,
  InfoSection,
  FigureSection,
  Image,
  StyledTinyText,
  StyledHeading,
  Text,
  UL,
  LI,
} from './marketing.css';
import MarketingImg from '../../../assets/images/marketing_img.svg';

export default function Marketing() {
  return (
    <MarketingContainer>
      <Div>
        <Wrapper>
          <InfoSection>
            <StyledTinyText>BUSINESS MARKETING TRACKING</StyledTinyText>
            <StyledHeading>Business tracking made easy</StyledHeading>
            <Text>
              You are in good hands! Our team provides tons of useful
              educational content for affiliate marketing tracking:
            </Text>
            <UL>
              <LI> Video tutorials</LI>
              <LI>Live webinars</LI>
              <LI>Dedicated support</LI>
              <LI>1on1 onboarding</LI>
              <LI> Step-by-step guides</LI>
            </UL>
          </InfoSection>

          <FigureSection>
            <Image src={MarketingImg} alt="marketing image" />
          </FigureSection>
        </Wrapper>
      </Div>
    </MarketingContainer>
  );
}
