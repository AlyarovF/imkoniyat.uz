import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import Footer from '../../components/Footer'
import './index.css'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()
  return (
    <div className='contact'>
      <div className='data'>
        <h1>{t("contact_title")}</h1>
        <div><b>{t("contact_text_1")}</b></div>
        <div><b>{t("contact_text_2")}</b></div>
        <div><b>{t("contact_text_address_title")}</b> {t("contact_text_address")}</div>
        <div><b>{t("contact_text_4")}</b> <a href='tel:+998 97 747-95-48'>+998 97 747-95-48</a>, <a href='tel:+998 90 918-99-59'>+998 90 918-99-59</a></div>
        <div><b>{t("contact_text_5")}</b> <a href='mailto:rais-2003@mail.ru'>rais-2003@mail.ru</a></div>
      </div>
      <YMaps className="ymap">
        <Map style={{ width: "100%", height: "100vh" }} defaultState={{ center: [41.323820, 69.281316], zoom: 15 }}>
          <Placemark geometry={[41.324470, 69.287636]} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']} />
        </Map>
      </YMaps>
      <Footer />
    </div>
  )
}

export default Contact