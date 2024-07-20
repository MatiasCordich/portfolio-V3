import React from "react";
import {
  HeaderNavLinks,
  HeaderNavLinksPage,
  HeaderNavText,
  HeaderNavTitle,
  Nav,
  StyledLink,
} from "./NavbarElements";
import { ResumeContainer, ResumeLink, SpanBold, StyledSpan } from "../Header/HeaderElements";
import { PiLinkedinLogoBold, PiGithubLogoBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <Nav>
      <HeaderNavTitle>
        {t("header.name")}
        <StyledSpan>{t("header.surname")}</StyledSpan>
      </HeaderNavTitle>
      <HeaderNavText>
        <SpanBold>{t("header.frontendDeveloper")}</SpanBold>.{" "}
        {t("header.description")}
        <SpanBold>{t("header.simple")}</SpanBold>,{" "}
        <SpanBold>{t("header.easy")}</SpanBold> {t("header.and")}
        <SpanBold>{t("header.scalable")}</SpanBold> {t("header.products")}
      </HeaderNavText>
      <HeaderNavLinks>
        <Link
          to="https://www.linkedin.com/in/matiassiocordich/"
          target="_blank"
        >
          <PiLinkedinLogoBold />
        </Link>
        <Link to="https://github.com/MatiasCordich" target="_blank">
          <PiGithubLogoBold />
        </Link>
      </HeaderNavLinks>
      <ResumeContainer>
      <ResumeLink
          href="/files/Matias Sio Coridich - CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("header.resume")}
        </ResumeLink>
        <ResumeLink
          href="/files/Matias Sio Coridich - CV (English).pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("header.resume_en")}
        </ResumeLink>
      </ResumeContainer>
      
      <HeaderNavLinksPage>
        <StyledLink to="#" onClick={() => scrollToSection("home")}>
        {t('navbar.home')}
        </StyledLink>
        <StyledLink
          to="#proyectos"
          onClick={() => scrollToSection("proyectos")}
        >
          {t('navbar.projects')}
        </StyledLink>
        <StyledLink
          to="#educacion"
          onClick={() => scrollToSection("educacion")}
        >
          {t('navbar.education')}
        </StyledLink>
        <StyledLink
          to="#tecnologias"
          onClick={() => scrollToSection("tecnologias")}
        >
          {t('navbar.technologies')}
        </StyledLink>
        <StyledLink to="#contacto" onClick={() => scrollToSection("contacto")}>
        {t('navbar.contact')}
        </StyledLink>
      </HeaderNavLinksPage>
    </Nav>
  );
};

export default Navbar;
