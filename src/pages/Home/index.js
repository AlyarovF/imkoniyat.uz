import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import './index.css'
// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Link } from "react-router-dom"
import { FaCaretRight } from 'react-icons/fa'

import image from '../../assets/imkoniyatlarheaderrus.png'

import { EffectFade, Pagination } from "swiper";

const Home = () => {
  return (
    <>
      <div className='hero' style={{ margin: "auto !important" }}>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Pagination]}
          style={{ height: "94vh" }}
        >
          <SwiperSlide>
            <img src={image} alt="logo1" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "100%" }} />
            <img src={require("../../assets/cover1.jpg")} alt="cover1" style={{ objectFit: "cover", width: "100%", height: "94vh" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="logo2" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "100%" }} />
            <img src={require("../../assets/cover2.jpg")} alt="cover2" style={{ objectFit: "cover", width: "100%", height: "94vh" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="logo3" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "100%" }} />
            <img src={require("../../assets/cover3.jpg")} alt="cover3" style={{ objectFit: "cover", width: "100%", height: "94vh" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="logo4" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "100%" }} />
            <img src={require("../../assets/cover4.jpg")} alt="cover4" style={{ objectFit: "cover", width: "100%", height: "94vh" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="logo5" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "100%" }} />
            <img src={require("../../assets/cover5.jpg")} alt="cover5" style={{ objectFit: "cover", width: "100%", height: "94vh" }} />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='mission'>
        <h1 style={{ textAlign: "center", margin: "auto", fontSize: "72px", marginBottom: "20px" }}>ЦИТАТЫ</h1>
        <Swiper
          className='swiper-text'
          spaceBetween={30}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Pagination]}
          style={{ textAlign: "center", margin: "auto", display: "block" }}
        >
          <SwiperSlide>
            <h3>«Комиссией по подготовке предложений, направленных на кардинальное совершенствование системы государственной поддержки лиц с инвалидностью, образованной распоряжением Президента Республики Узбекистан от 1 августа 2017 года № Р–5006, проведено комплексное и глубокое изучение состояния дел в сфере раннего выявления и предупреждения инвалидности, медико-социальной помощи лицам с инвалидностью, их профессионального обучения и трудоустройства.» - Мирзиёев Ш.М.</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h3>«Установить с 1 января 2018 года ставку фиксированного налога независимо от вида деятельности и места его осуществления для индивидуальных предпринимателей, являющихся лицами с инвалидностью I и II группы, в размере 50 процентов минимальной заработной платы в месяц, а за каждого нанятого индивидуальным предпринимателем работника из числа лиц с инвалидностью I и II группы – в размере 15 процентов минимальной заработной платы в месяц.» - Мирзиёев Ш.М.</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h3>«Ввести начиная с 2018/2019 учебного года порядок, в соответствии с которым для лиц с инвалидностью дополнительно выделяется двухпроцентная квота приема в высшие образовательные учреждения от общего количества приема абитуриентов. Средствам массовой информации организовать сопровождение выпускаемых новостей, телепередач и видеофильмов субтитрами или сурдопереводом, расширение изданий со специальным шрифтом, способствующих повышению доступа лиц с инвалидностью к получению информации и обеспечению их досуга.» - Мирзиёев Ш.М.</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h3>«С 1 июня 2018 года вводится единый электронный реестр лиц с инвалидностью, включающий комплексную информацию о них (персональные данные о лицах с инвалидностью, размеры и виды денежных выплат, выданные технические средства реабилитации, протезно-ортопедические изделия и другое), что обеспечит организацию эффективной лечебной и реабилитационной работы. Для решения этой задачи будут привлечены иностранные инвестиции в сферу производства технических средств реабилитации и протезно-ортопедических изделий, в том числе путем содействия в модернизации действующих предприятий, создания в республике новых производств с применением современных технологий.» - Мирзиёев Ш.М.</h3>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='activity'>
        <h1 style={{ textAlign: "center", margin: "auto", fontSize: "72px", marginBottom: "20px" }}>ДЕЯТЕЛЬНОСТЬ</h1>

        <Swiper
          className='swiper-text'
          spaceBetween={30}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Pagination]}
          style={{ textAlign: "center", margin: "auto", display: "block" }}
        >
          <SwiperSlide className='consult'>
            <h3>Основной целью деятельности Ассоциации инвалидов является создание инклюзивного общества</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h3>Оказаны консультации по социальным и правовым вопросам более 200 лицам с инвалидностью.</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h3>На сегодняшний день Ассоциация инвалидов Узбекистана объединяет 27 организаций инвалидов и имеет 8 областных территориальных отделений</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h3>Члены Ассоциации инвалидов  разработали проект  «О дополнительных мерах государственной поддержки общественных объединений лиц с инвалидностью»</h3>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='mission strategy'>
        <h1 style={{ textAlign: "center", margin: "auto", fontSize: "72px", marginBottom: "20px" }}>МИССИЯ АССОЦИАЦИИ</h1>
        <Swiper
          className='swiper-text'
          spaceBetween={30}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Pagination]}
          style={{ textAlign: "center", margin: "auto", display: "block" }}
        >
          <SwiperSlide>
            <h3>Деятельность Ассоциации инвалидов — направлена на расширение прав и возможностей лиц с инвалидностью и обеспечение их активного участия в политической, экономической, социальной и культурной жизни в таких формах, при которых уважаются и учитываются их права и особенности. Ассоциация инвалидов продвигает понимание инвалидности, как проблему соблюдения прав</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h3>Основной целью — деятельности Ассоциации инвалидов является создание инклюзивного общества (общества — где всем гражданам созданы равные возможности для развития и реализации их потенциала).</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h3>Осуществление общественного контроля за реализацией нормативно-правовых актов в сфере зашиты прав лиц с инвалидностью и развитии гражданского общества.</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h3>Просвещении всего общества о жизнедеятельности и правах лиц с инвалидностью.</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h3>Разработка проектов нормативно-правовых актов в сфере зашиты прав лиц с инвалидностью, а также развитии гражданского общества.</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h3>Развитие международного сотрудничества во вопросах зашиты прав лиц с инвалидностью и развитие гражданского общества.</h3>
          </SwiperSlide>
        </Swiper>

        <Link className='btn-link' to="/about/"><button>Подробнее <FaCaretRight /></button></Link>
      </div>

      <div className='stat'>
        <h1 style={{ textAlign: "center", margin: "auto", fontSize: "72px", marginBottom: "20px" }}>ПОПУЛЯРНЫЕ РАЗДЕЛЫ</h1>

        <div className='stat-blocks'>
          <div className='stat-block'>
            <Link to="">Мероприятия</Link>
          </div>
          <div className='stat-block'>
            <Link to="">Инклюзивное общество</Link>
          </div>
          <div className='stat-block'>
            <Link to="">Библиотека</Link>
          </div>
          <div className='stat-block'>
            <Link to="">Активный образ жизни</Link>
          </div>
          <div className='stat-block'>
            <Link to="">Интересные статьи</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home