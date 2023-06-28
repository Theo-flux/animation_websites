import {
  DownloadBtn,
  StyledGoogleIcon,
  StyledAppleIcon,
  Col,
  Small,
  Title,
} from './download';

export const GoogleBtn = () => {
  return (
    <DownloadBtn>
      <StyledGoogleIcon />
      <Col>
        <Small>Get it on</Small>
        <Title>Google Play</Title>
      </Col>
    </DownloadBtn>
  );
};

export const AppleBtn = () => {
  return (
    <DownloadBtn>
      <StyledAppleIcon />
      <Col>
        <Small>Download on the</Small>
        <Title>Apple Store</Title>
      </Col>
    </DownloadBtn>
  );
};
