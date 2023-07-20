import { Div, ButtonIcon } from '../../../shared';
import {
  FeaturesContainer,
  Wrapper,
  Top,
  Bottom,
  StyledHeading,
  CardContainer,
  IconCase,
  StyledCommandIcon,
  CardTitle,
  CardText,
  CardLink
} from './features.css';

const features = [
  {
    id: 'card',
    title: 'Feature',
    text: 'Integrate all your traffic sources with Voluum and set up custom rules ro auto-optimize your campaigns',
  },
  {
    id: 'card',
    title: 'Feature',
    text: 'Integrate all your traffic sources with Voluum and set up custom rules ro auto-optimize your campaigns',
  },
  {
    id: 'card',
    title: 'Feature',
    text: 'Integrate all your traffic sources with Voluum and set up custom rules ro auto-optimize your campaigns',
  },
  {
    id: 'card',
    title: 'Feature',
    text: 'Integrate all your traffic sources with Voluum and set up custom rules ro auto-optimize your campaigns',
  },
];

interface ICardProps {
  feat: {
    id: string;
    title: string;
    text: string;
  };
}

const Card = ({ feat }: ICardProps) => {
  const { id, title, text } = feat;
  return (
    <CardContainer className={id}>
      <IconCase>
        <StyledCommandIcon />
      </IconCase>

      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>

      <CardLink>Learn More</CardLink>
    </CardContainer>
  );
};

export default function Features() {
  return (
    <FeaturesContainer>
      <Div>
        <Wrapper>
          <Top>
            <StyledHeading>
              Features so good, they will change the way you see us
            </StyledHeading>
            <ButtonIcon text="SEE ALL FEATURES" />
          </Top>
          <Bottom>
            {features.map((feat, index) => {
              return <Card key={index} feat={feat} />;
            })}
          </Bottom>
        </Wrapper>
      </Div>
    </FeaturesContainer>
  );
}
