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
  BrandFigure,
  BrandImg,
} from './hero.css';
import MacbookImage from '../../../assets/images/home_hero_image.png';
import Medal from '../../../assets/images/medal.png';
import GoogleAds from '../../../assets/images/logos/google_ads.svg';
import Facebook from '../../../assets/images/logos/facebook.svg';
import PropellerAds from '../../../assets/images/logos/propeller_ads.svg';
import Taboola from '../../../assets/images/logos/taboola.svg';
import Exoclick from '../../../assets/images/logos/exo.svg';
import Outbrain from '../../../assets/images/logos/outbrain.svg';
import Mgid from '../../../assets/images/logos/mgid.svg';

const logos = [
  {
    id: 'brand_el',
    alt: 'google_ads',
    brand: GoogleAds,
  },

  {
    id: 'brand_el',
    alt: 'facebook',
    brand: Facebook,
  },

  {
    id: 'brand_el',
    alt: 'propeller_ads',
    brand: PropellerAds,
  },
  {
    id: 'brand_el',
    alt: 'taboola',
    brand: Taboola,
  },
  {
    id: 'brand_el',
    alt: 'exoclick',
    brand: Exoclick,
  },
  {
    id: 'brand_el',
    alt: 'outbrain',
    brand: Outbrain,
  },
  {
    id: 'brand_el',
    alt: 'mgid',
    brand: Mgid,
  },
];

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

              <BrandFigure>
                {logos.map((logo, idx) => {
                  const { brand, id, alt } = logo;
                  return (
                    <BrandImg key={idx} className={id} src={brand} alt={alt} />
                  );
                })}
              </BrandFigure>
            </IntegrationContainer>
          </HeroCardIntegration>
        </HeroWrapper>
      </Div>
    </HeroContainer>
  );
};

export default Hero;
