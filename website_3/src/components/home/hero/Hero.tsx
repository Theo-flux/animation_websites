import { Div, CTABtnOutline, CTABtn } from '../../../shared';
import {
  HeroContainer,
  HeroWrapper,
  HeroContent,
  HeroInnerContent,
  HeroCTAContainer,
  HeroCardIntegration,
  IntegrationContainer,
  HeroSmallText,
  HeroHeading,
  HeroSubHeading,
  Figure,
  Img,
  MedalFigure,
  MedalImg,
  StyledHeading2,
} from './hero.css';
import MacbookImage from '../../../assets/images/home_hero_image.png';
import Medal from '../../../assets/images/medal.png';

const Hero = () => {
  return (
    <HeroContainer>
      <Div>
        <HeroWrapper>
          <HeroContent>
            <HeroInnerContent>
              <HeroSmallText>The all-in-one BUSINESS PLATFORM</HeroSmallText>
              <HeroHeading>Simplify, Transform & Discover</HeroHeading>
              <HeroSubHeading>
                your sub-heading comes right here with text to support the main
                heading!
              </HeroSubHeading>
              <HeroCTAContainer>
                <CTABtnOutline>Login</CTABtnOutline>
                <CTABtn>Get started</CTABtn>
              </HeroCTAContainer>
            </HeroInnerContent>
          </HeroContent>

          <HeroCardIntegration>
            <Figure>
              <Img src={MacbookImage} alt="hero-image" />
            </Figure>

            <IntegrationContainer>
              <MedalFigure>
                <MedalImg src={Medal} alt="medal-image" />
                <MedalImg src={Medal} alt="medal-image" />
                <MedalImg src={Medal} alt="medal-image" />
              </MedalFigure>

              <StyledHeading2>
                Integrated with 40+ Traffic sources
              </StyledHeading2>
            </IntegrationContainer>
          </HeroCardIntegration>
        </HeroWrapper>
      </Div>
    </HeroContainer>
  );
};

export default Hero;
