import { Div } from '../../../shared';
import {
  FeatureContainer,
  Top,
  Bottom,
  Title,
  SubTitle,
  CardContainer,
  IconCase,
  StyledCommandIcon,
  CardTitle,
  CardText,
} from './feature.css';

const features = [
  {
    title: 'This is the first feature',
    text: 'Identify the most influential using posting with your template.',
  },
  {
    title: 'This is the first feature',
    text: 'Identify the most influential using posting with your template.',
  },
  {
    title: 'This is the first feature',
    text: 'Identify the most influential using posting with your template.',
  },
  {
    title: 'This is the first feature',
    text: 'Identify the most influential using posting with your template.',
  },
];

interface ICardProps {
  feat: {
    title: string;
    text: string;
  };
}

const Card = ({ feat }: ICardProps) => {
  const { title, text } = feat;
  return (
    <CardContainer>
      <IconCase>
        <StyledCommandIcon />
      </IconCase>

      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardContainer>
  );
};

export default function Feature() {
  return (
    <FeatureContainer>
      <Div>
        <Top>
          <Title>Track any hashtag(s) Performance</Title>
          <SubTitle>
            Don’t waste time on search manual tasks. Let Automation do it for
            you. Simplify workflows, reduce errors, and save time.
          </SubTitle>
        </Top>
        <Bottom>
          {features.map((feat, index) => {
            return <Card key={index} feat={feat} />;
          })}
        </Bottom>
      </Div>
    </FeatureContainer>
  );
}
