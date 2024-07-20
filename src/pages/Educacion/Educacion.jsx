import React from "react";
import { SectionBox, SectionTitle, Line, Description } from "../Home/HomeElements";
import { SpanBold } from "../../components/Header/HeaderElements";
import { SpanLight, UniversityTitle } from "./EducacionElements";
import { useTranslation } from "react-i18next";

const Educacion = () => {

  const { t } = useTranslation()
  return (
    <SectionBox id="educacion">
      <SectionTitle>
      {t("education.title")}
      <Line />
      </SectionTitle>
      
      <UniversityTitle>
      {t("education.university")}{" "}
        <SpanLight>{t("education.year")}</SpanLight>
      </UniversityTitle>
      <Description>
        <SpanBold>
        {t("education.key_1")}{" "}
        </SpanBold>
        {t("education.value_1")}
      </Description>
      <Description>
        <SpanBold>
        {t("education.key_2")}{" "}
        </SpanBold>
        {t("education.value_2")}
      </Description>
      <Description>
        <SpanBold>
        {t("education.key_3")}{" "}
        </SpanBold>
        {t("education.value_3")}
      </Description>
    </SectionBox>
  );
};

export default Educacion;
