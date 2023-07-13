import { AppleBtn, Div, GoogleBtn } from '../../../shared';
import {
  CapabilityContainer,
  Wrapper,
  InfoSection,
  FigureSection,
  Image,
  StyledTinyText,
  StyledHeading,
  Text,
  BtnContainer,
} from './capability.css';
import GingerBread from '../../../assets/images/gingerbread_men.svg';

function Capability() {
  return (
    <CapabilityContainer>
      <Div>
        <Wrapper>
          <InfoSection>
            <StyledTinyText>Campaign Optimisation</StyledTinyText>
            <StyledHeading>Streamline your business with ease</StyledHeading>
            <Text>
              Our app streamlines your workflow, saving you time and energy so
              you can focus on growing your business various conversion types
              and even pass them to your traffic source!
            </Text>
            <Text>
              It gives you the freedom to access your business from anywhere, so
              you can stay on top of things at all times. brought you
              conversions and effortlessly.
            </Text>

            <BtnContainer>
              <GoogleBtn />
              <AppleBtn />
            </BtnContainer>
          </InfoSection>

          <FigureSection>
            <Image src={GingerBread} alt="gingerbread" />
          </FigureSection>
        </Wrapper>
      </Div>
    </CapabilityContainer>
  );
}

export default Capability;
