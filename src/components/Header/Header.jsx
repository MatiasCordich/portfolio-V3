import React from "react";
import {
  HeaderBox,
  HeaderTitle,
  HeaderDescription,
  HeaderLinks,
  SpanBold,
  ResumeLink,
  StyledSpan,
  ResumeContainer,
} from "./HeaderElements";
import { PiLinkedinLogoBold, PiGithubLogoBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <HeaderBox>
      <HeaderTitle>
        {t("header.name")} <StyledSpan>{t("header.surname")}</StyledSpan>
      </HeaderTitle>

      <HeaderDescription>
        <SpanBold>{t("header.frontendDeveloper")}</SpanBold>.{" "}
        {t("header.description")}
        <SpanBold>{t("header.simple")}</SpanBold>,{" "}
        <SpanBold>{t("header.easy")}</SpanBold> {t("header.and")}
        <SpanBold>{t("header.scalable")}</SpanBold>
        {t("header.products")}.
      </HeaderDescription>
      <HeaderLinks>
        <Link>
          <PiLinkedinLogoBold />
        </Link>
        <Link>
          <PiGithubLogoBold />
        </Link>
      </HeaderLinks>
      <ResumeContainer>
        <ResumeLink
          href="/src/files/Matias Sio Coridich - CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("header.resume")}
        </ResumeLink>
        <ResumeLink
          href="/src/files/Matias Sio Coridich - CV (English).pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("header.resume_en")}
        </ResumeLink>
      </ResumeContainer>
    </HeaderBox>
  );
};

export default Header;
