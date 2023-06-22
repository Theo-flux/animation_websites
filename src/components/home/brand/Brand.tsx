import { BrandContainer, BrandGrid, BrandFigure, BrandImg } from './brand.css';
import { Div } from '../../../shared';
import Airbnb from '../../../assets/images/brands/airbnb.svg';
import Google from '../../../assets/images/brands/google.svg';
import Netflix from '../../../assets/images/brands/netflix.svg';
import Slack from '../../../assets/images/brands/slack.svg';
import Uber from '../../../assets/images/brands/uber.svg';

const brands = [
  {
    name: 'slack',
    image: Slack,
  },

  {
    name: 'netflix',
    image: Netflix,
  },

  {
    name: 'google',
    image: Google,
  },

  {
    name: 'airbnb',
    image: Airbnb,
  },

  {
    name: 'uber',
    image: Uber,
  },
];

export default function Brand() {
  return (
    <BrandContainer>
      <Div>
        <BrandGrid>
          {brands.map((brand, index) => {
            const { name, image } = brand;
            return (
              <BrandFigure key={index}>
                <BrandImg src={image} alt={name} />
              </BrandFigure>
            );
          })}
        </BrandGrid>
      </Div>
    </BrandContainer>
  );
}
