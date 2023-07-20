import { ButtonIconContainer, BtnText, StyledArrowIcon } from './index';

interface IBtnprops {
  text: string;
  color?: string;
}

export const ButtonIcon = ({ text, color }: IBtnprops) => {
  return (
    <ButtonIconContainer color={color}>
      <BtnText>{text}</BtnText>
      <StyledArrowIcon />
    </ButtonIconContainer>
  );
};

