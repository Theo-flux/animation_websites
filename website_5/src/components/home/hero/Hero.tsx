// import { Div } from '../../../shared';
import {
  HeroContainer,
  HeroContent,
  Figure,
  Img,
  HeroHeading,
  HeroSubHeading,
} from './hero.css';
import HeroImage from '../../../assets/images/hero_image.png';
import { ButtonIcon, StyledCartIcon } from '../../../shared';

const Hero = () => {
  return (
    <HeroContainer>
      <Figure>
        <Img src={HeroImage} alt="hero-image" />
      </Figure>
      <HeroContent>
        <HeroHeading>Introducing Beauty Secret</HeroHeading>
        <HeroSubHeading>
          Elevate your Cosmetics line with our Premium Herbal Ingredient.
        </HeroSubHeading>

        <ButtonIcon text='Purchase' Icon={<StyledCartIcon/>}/>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
