import React, { useState, useEffect } from 'react'
import CrContent from '../CrContent'
import SideBar from '../SideBar'
import './index.css'
import Footer from '../../../components/Footer'
import { useTranslation } from 'react-i18next'
import api from '../../../api/posts'

export default function About() {
    const [posts, setPosts] = useState([]);
    const menuId = "about"

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await api.get(`/post?menuId=${menuId}`);
            setPosts(res.data.data);
        };


        fetchPosts();
    }, []);

    const { t } = useTranslation()
    return (
        <div className='About-js'>
            <div className='heading'>
                <div className='container'>
                    <div className='text'>
                        <h1>{t("about_title")}</h1>
                        <h3>{t("about_caption")}</h3>
                    </div>
                </div>
            </div>
            <div className='About container'>
                <SideBar />
                <div className='content'>
                    {
                        posts.map((post) => {
                            return (
                                <CrContent mediatype="image" src={`https://api.mamadaliyev.uz/imkoniyat/${post.headImage}`} title={post.title} caption={post.body} />
                            )

                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}
