import React from 'react'
import { Description, Line, SectionBox, SectionTitle } from '../Home/HomeElements'
import Card from '../../components/Card/Card'
import { useTranslation } from 'react-i18next'

const Proyectos = () => {

  const { t } = useTranslation()

  const cards = t('proyects.cards', {returnObjects: true})

  return (
    <SectionBox id="proyectos">
      <SectionTitle>
      {t("proyects.title")}
        <Line/>
      </SectionTitle>
      <Description>
      {t("proyects.Description")}
      </Description>
      {cards.map((card, index) => (
        <Card key={index} image={card.image} title={card.title} text={card.text} link1={card.link1} link2={card.link2} tags={card.tags} />
      ))}
    </SectionBox>
  )
}

export default Proyectos