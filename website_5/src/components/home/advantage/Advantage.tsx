import {
  AdvantageContainer,
  Content,
  ContentHead,
  Figure,
  Image,
  Ul,
  Li,
} from './advantage.css';
import Models from '../../../assets/images/models.png';

export default function Advantage() {
  return (
    <AdvantageContainer>
      <Content>
        <ContentHead>The Natural Advantage</ContentHead>
        <Ul>
          <Li>Premium Quality</Li>
          <Li>Third-Party Testing</Li>
          <Li>GMP-Certified Manufacturing</Li>
          <Li>No Artificial Additives</Li>
          <Li>Customer Satisfaction</Li>
        </Ul>
      </Content>

      <Figure>
        <Image src={Models} alt="models.png" />
      </Figure>
    </AdvantageContainer>
  );
}
