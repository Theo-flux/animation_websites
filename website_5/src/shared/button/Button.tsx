import { ButtonIconContainer, BtnText } from './index';

interface IBtnprops {
  text: string;
  color?: string;
  Icon: React.ReactNode;
}

export const ButtonIcon = ({ text, color, Icon }: IBtnprops) => {
  return (
    <ButtonIconContainer color={color}>
      <BtnText>{text}</BtnText>
      {Icon}
    </ButtonIconContainer>
  );
};
