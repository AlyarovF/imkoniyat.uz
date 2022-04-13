import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import Footer from '../../components/Footer'
import './index.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='data'>
        <h1>Контакты</h1>
        <div><b>Ассоциация инвалидов Узбекистана</b></div>
        <div><b>Председатель Ассоциации:Исаков Ойбек Юсуфбекович</b></div>
        <div><b>Адрес:</b> 100000, ул. Шарафобод, дом 5.г.Ташкент, Узбекистан</div>
        <div><b>Телефон:</b> <a href='tel:+998 97 747-95-48'>+998 97 747-95-48</a>, <a href='tel:+998 90 918-99-59'>+998 90 918-99-59</a></div>
        <div><b>Е-mail:</b> <a href='mailto:rais-2003@mail.ru'>rais-2003@mail.ru</a></div>
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