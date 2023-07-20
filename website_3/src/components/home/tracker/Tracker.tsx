import {
  InfoSection,
  SelectionBox,
  TrackerContainer,
  Trackerwrapper,
  TrackerCard,
  OptionBox,
  StyledHeading,
  CardInfo,
  CardFigure,
  CardImage,
  StyledTinyText,
  StyledHeading2,
  Text,
} from './tracker.css';
import { CTABtn, Div } from '../../../shared';
import DashboardOne from '../../../assets/images/dashboard_1.svg';
import DashboardTwo from '../../../assets/images/dashboard_2.svg';

export default function Tracker() {
  return (
    <TrackerContainer>
      <Div>
        <Trackerwrapper>
          <InfoSection>
            <StyledHeading>
              Improve your business with our digital tracker marketing software
            </StyledHeading>
          </InfoSection>

          <SelectionBox>
            <OptionBox>Option</OptionBox>
            <OptionBox>Option</OptionBox>
            <OptionBox>Option</OptionBox>
          </SelectionBox>

          <TrackerCard>
            <CardInfo>
              <StyledTinyText>BUSINESS MARKETING TRACKING</StyledTinyText>
              <StyledHeading2>Track everything in one place</StyledHeading2>
              <Text>
                What kind of ads do you run? Native, display, pop, email,
                search, push, social, video? Paid or organic? Voluum affiliate
                tracker lets you track it all! With or without redirects.
              </Text>
              <Text>
                Thanks to our superfast reporting you can easily monitor over 30
                metrics about each visit, click, and conversion coming from all
                of your traffic sources – with one tool and in real time!
              </Text>
              <CTABtn>VIEW METRICS</CTABtn>
            </CardInfo>

            <CardFigure>
              <CardImage src={DashboardOne} alt="dashboard_1" />
              <CardImage src={DashboardTwo} alt="dashboard_2" />
            </CardFigure>
          </TrackerCard>
        </Trackerwrapper>
      </Div>
    </TrackerContainer>
  );
}
