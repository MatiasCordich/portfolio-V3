import React from "react";
import {
  Description,
  Line,
  SectionBox,
  SectionTitle,
} from "../Home/HomeElements";
import { SocialLinks, StyledSocialLink } from "./ContactoElements";
import { MdOutlineEmail } from "react-icons/md";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { useTranslation } from "react-i18next";

const Contacto = () => {

  const { t } = useTranslation()

  return (
    <SectionBox id="contacto">
      <SectionTitle>
        {t("contact.title")}
        <Line />
      </SectionTitle>
      <Description>
      {t("contact.description")}
      </Description>
      <Description>{t("contact.text")}</Description>
      <SocialLinks>
        <StyledSocialLink href="https://www.linkedin.com/in/matiassiocordich/" target="_blank">
          <PiLinkedinLogoBold  /> 
        </StyledSocialLink>

        <StyledSocialLink href="mailto:m.scordich@gmail.com" >
          <MdOutlineEmail value={{fontSize:"4rem"}} />
        </StyledSocialLink>
      </SocialLinks>
    </SectionBox>
  );
};

export default Contacto;
