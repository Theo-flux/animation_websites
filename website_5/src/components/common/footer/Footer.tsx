import {
  FooterContainer,
  FooterWrapper,
  FooterBottom,
  Top,
  Bottom,
  Title,
  Text,
  StyledMailIcon,
  StyledPhoneIcon,
  Row,
} from './footer.css';
import { Div } from '../../../shared';
import Footer_Image from '../../../assets/images/footer_image.png';

export default function Footer() {
  return (
    <FooterContainer
      style={{
        background: `url(${Footer_Image}) rgba(127, 69, 42, 0.67)`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `100% 100%`,
        backgroundSize: `100% 100%`,
      }}
    >
      <Div>
        <FooterWrapper>
          <Top>
            <Title>Contact</Title>
            <Text>
              Obanikoro No 18, Irepodun street, Ikeja, iKEJA CITY palm, Lagos
              State.
            </Text>
          </Top>

          <Bottom>
            <Row>
              <StyledMailIcon />
              <Text>hello@naturalbeauty.org</Text>
            </Row>

            <Row>
              <StyledPhoneIcon />
              <Text>+234 706 909 4067</Text>
            </Row>
          </Bottom>
        </FooterWrapper>

        <FooterBottom>
          <Text>2023 @ Credevnet</Text>
        </FooterBottom>
      </Div>
    </FooterContainer>
  );
}
