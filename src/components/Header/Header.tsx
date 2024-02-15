import { HeaderContainer, Image, ImageContainer, SettingsContainer, SettingsText } from "./Header.style";

export const Header = () => {
  return (
    <HeaderContainer>
      <Image src="/huguenot_logo.svg" alt="Huguenot Services Ltd" width={40} height={40} />
      <SettingsContainer>
        <ImageContainer>
          <Image src="/flag.svg" alt="flag" />
        </ImageContainer>
        <SettingsText>Professional Investor</SettingsText>
      </SettingsContainer>
    </HeaderContainer>
  );
};
