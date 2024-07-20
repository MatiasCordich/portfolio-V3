import React from "react";
import {
  Line,
  SectionBox,
  SectionTitle,
  Description,
  StyledLinkButton,
} from "./HomeElements";
import { scrollToSection } from "../../components/Navbar/Navbar";
import { useTranslation } from "react-i18next";

const Home = () => {

  const { t } = useTranslation()

  return (
    <SectionBox id="home">
      <SectionTitle>
        {t('profile.title')}
        <Line />
      </SectionTitle>
      <Description>
      {t('profile.introduction')}
      </Description>

      <Description>
      {t('profile.text_1')}
      </Description>
      <Description>
      {t('profile.text_2')}
      </Description>
      <Description>
      {t('profile.text_3')}
      </Description>

      <Description>
      {t('profile.text_4')}
      </Description>

      <Description>
      {t('profile.text_5')}
      </Description>
      <StyledLinkButton
        to="#proyectos"
        onClick={() => scrollToSection("proyectos")}
      >
        {t('profile.button_text')}
      </StyledLinkButton>
    </SectionBox>
  );
};

export default Home;
