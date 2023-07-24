import { ButtonIcon, Div, StyledCartIcon } from '../../../shared';
import {
  DiscountCard,
  DiscountContainer,
  InfoSection,
  StyledHeading,
  StyledText,
  Wrapper,
} from './discount.css';

export default function Discount() {
  return (
    <DiscountContainer>
      <Div>
        <Wrapper>
          <DiscountCard>
            <InfoSection>
              <StyledHeading>Get flat 20% discount</StyledHeading>
              <StyledText>CODE #LOWDATE</StyledText>
            </InfoSection>
            <ButtonIcon text="Copy code" Icon={<StyledCartIcon />} />
          </DiscountCard>
        </Wrapper>
      </Div>
    </DiscountContainer>
  );
}
