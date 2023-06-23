import { ButtonIcon, Div } from '../../../shared';
import {
  Bottom,
  CtaContainer,
  Top,
  Info,
  Figure,
  PhoneFigure,
  PhoneImg1,
  PhoneImg2,
  Img,
  Title,
  SubTitle,
} from './cta.css';
import Desktop from '../../../assets/images/desktop-mockup.svg';
import Phonesm1 from '../../../assets/images/app-mockup/iPhone-sm-6.5-1.svg';
import Phonesm2 from '../../../assets/images/app-mockup/iPhone-sm-6.5.svg';

export default function Cta() {
  return (
    <CtaContainer>
      <Div>
        <Top>
          <PhoneFigure>
            <PhoneImg2 src={Phonesm2} alt={'desktop-mockup'} />
            <PhoneImg1 src={Phonesm1} alt={'desktop-mockup'} />
          </PhoneFigure>

          <Info>
            <Title color="var(--primary)">
              Important feature for your business
            </Title>
            <SubTitle>
              Graphs displaying your performance for metrics like follower
              evolution, average engagement rate per post and reach and
              impressions to give you the insights.
            </SubTitle>
            <ButtonIcon text="Text button" />
          </Info>
        </Top>
        <Bottom>
          <Info>
            <Title>Schedule Your Post Whenever You Want</Title>
            <SubTitle>
              Publish your content automatically to ensure that your content
              reaches the right people. Built-in features such as
            </SubTitle>
            <ButtonIcon text="Text button" color='black'/>
          </Info>

          <Figure>
            <Img src={Desktop} alt={'desktop-mockup'} />
          </Figure>
        </Bottom>
      </Div>
    </CtaContainer>
  );
}
