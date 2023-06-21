import {
  HeroContainer,
  HeroWrapper,
  HeroInfo,
  HeroFigure,
  HeroImage,
} from './home.css';
import Dashboard from '../../assets/images/dashboard-image.svg';

export default function Hero() {
  return (
    <HeroContainer>
      {/* <Div> */}
      <HeroWrapper>
        <HeroInfo>Hero Info</HeroInfo>

        <HeroFigure>
          <HeroImage src={Dashboard} alt="dashboard.svg" />
        </HeroFigure>
      </HeroWrapper>
      {/* </Div> */}
    </HeroContainer>
  );
}
