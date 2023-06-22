import { useMediaQuery } from 'react-responsive';
import {
  HeroContainer,
  InnerWrapper,
  Wrapper,
  HeroInfo,
  HeroFigure,
  HeroImg,
  StyledTitle,
  StyledSubheading,
  Row,
} from './home.css';

import Dashboard from '../../assets/images/dashboard-image.svg';
import Ring from '../../assets/images/ring.svg';
import { CTABtn, ButtonIcon } from '../../shared';

export default function Hero() {
  const isTablet = useMediaQuery({ minWidth: 767 });

  return (
    <HeroContainer>
      <InnerWrapper
        style={{
          background: `url(${Ring})`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `${isTablet ? 'right' : 'left'}`,
        }}
      >
        <Wrapper>
          <HeroInfo>
            <StyledTitle>
              <div>Business heading</div>
              <div> will dangle </div>
              <div>right here</div>
            </StyledTitle>
            <StyledSubheading>
              Your sub-heading comes right here with text to support the main
              heading.
            </StyledSubheading>

            <Row>
              <CTABtn>Primary button</CTABtn>
              <ButtonIcon text="Primary button" color="white" />
            </Row>
          </HeroInfo>
          <HeroFigure>
            <HeroImg src={Dashboard} alt="" />
          </HeroFigure>
        </Wrapper>
      </InnerWrapper>
    </HeroContainer>
  );
}
