import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ButtonLang, SwitcherBox } from './LanguageSwitercherElements'

const LanguageSwitcher = () => {

    const { i18n } = useTranslation()

    const [isButton1Disabled, setIsButton1Disabled] = useState(false);
    const [isButton2Disabled, setIsButton2Disabled] = useState(false);

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng)

      if (lng === 'en') {
        setIsButton1Disabled(true);
        setIsButton2Disabled(false);
      } else if (lng === 'es') {
        setIsButton1Disabled(false);
        setIsButton2Disabled(true);
      }

    }

  return (
    <SwitcherBox>
        <ButtonLang onClick={() => changeLanguage('en')} disabled={isButton1Disabled}>En</ButtonLang>
        <ButtonLang onClick={() => changeLanguage('es')} disabled={isButton2Disabled}>Es</ButtonLang>
    </SwitcherBox>
  )
}

export default LanguageSwitcher