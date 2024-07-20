import React from 'react'
import { useTranslation } from 'react-i18next'
import { ButtonLang, SwitcherBox } from './LanguageSwitercherElements'

const LanguageSwitcher = () => {

    const { i18n } = useTranslation()

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng)
    }

  return (
    <SwitcherBox>
        <ButtonLang onClick={() => changeLanguage('en')}>En</ButtonLang>
        <ButtonLang onClick={() => changeLanguage('es')}>Es</ButtonLang>
    </SwitcherBox>
  )
}

export default LanguageSwitcher