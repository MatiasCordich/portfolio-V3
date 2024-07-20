import React from 'react'
import { Description, Line, SectionBox, SectionTitle } from '../Home/HomeElements'
import Stack from '../../components/Stack/Stack'
import { useTranslation } from 'react-i18next'

const Tecnologias = () => {

  const { t } = useTranslation()

  const stacks = t('technologies.stack', {returnObjects: true})

  return (
    <SectionBox id="tecnologias">
        <SectionTitle>
        {t("technologies.title")}
            <Line/>
        </SectionTitle>
        <Description>
        {t("technologies.description")}
        </Description>
        {stacks.map((stack, index) => (
        <Stack key={index} title={stack.Title} stacks={stack.Stack}  />
      ))}
    </SectionBox>
  )
}

export default Tecnologias