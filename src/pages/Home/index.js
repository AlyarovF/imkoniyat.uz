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
import Footer from '../../components/Footer'

import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()
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
        <h1 style={{ textAlign: "center", margin: "auto", fontSize: "72px", marginBottom: "20px" }}>{t("home_quotes")}</h1>
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
            <h3>{t("home_quotes_1")}</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h3>{t("home_quotes_2")}</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h3>{t("home_quotes_3")}</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h3>{t("home_quotes_4")}</h3>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='activity'>
        <h1 style={{ textAlign: "center", margin: "auto", fontSize: "72px", marginBottom: "20px" }}>{t("home_activity")}</h1>

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
            <h3>{t("home_activity_1")}</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h3>{t("home_activity_2")}</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h3>{t("home_activity_3")}</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h3>{t("home_activity_4")}</h3>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='mission strategy'>
        <h1 style={{ textAlign: "center", margin: "auto", fontSize: "72px", marginBottom: "20px" }}>{t("home_mission")}</h1>
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
            <h3>{t("home_mission_1")}</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h3>{t("home_mission_2")}</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h3>{t("home_mission_3")}</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h3>{t("home_mission_4")}</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h3>{t("home_mission_5")}</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h3>{t("home_mission_6")}</h3>
          </SwiperSlide>
        </Swiper>

        <Link className='btn-link' to="/about/"><button>{t("home_mission_more")} <FaCaretRight /></button></Link>
      </div>

      <div className='stat'>
        <h1 style={{ textAlign: "center", margin: "auto", fontSize: "72px", marginBottom: "20px" }}>{t("home_stat")}</h1>

        <div className='stat-blocks'>
          <div className='stat-block'>
            <Link to="">{t("home_stat_1")}</Link>
          </div>
          <div className='stat-block'>
            <Link to="">{t("home_stat_1")}</Link>
          </div>
          <div className='stat-block'>
            <Link to="">{t("home_stat_2")}</Link>
          </div>
          <div className='stat-block'>
            <Link to="">{t("home_stat_3")}</Link>
          </div>
          <div className='stat-block'>
            <Link to="">{t("home_stat_4")}</Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home