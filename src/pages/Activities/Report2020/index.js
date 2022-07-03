import React, { useState, useEffect } from 'react'
import CrContent from '../CrContent'
import SideBar from '../SideBar'
import './index.css'
import Footer from '../../../components/Footer'
import { useTranslation } from 'react-i18next'
import api from '../../../api/posts'

export default function Report2020() {
    const [posts, setPosts] = useState([]);
    const menuId = "report2020"

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await api.get(`/post?menuId=${menuId}`);
            setPosts(res.data.data);
        };


        fetchPosts();
    }, []);

    const { t } = useTranslation()
    return (
        <div className='Report2020-js'>
            <div className='container'>
                <h1>{t("report2020_title")}</h1>
            </div>
            <div className='Report2020 container'>
                <SideBar />
                <div className='content'>
                    {
                        posts.map((post) => {
                            return (
                                <CrContent mediatype="image" src={`https://api.mamadaliyev.uz/imkoniyat/imkoniyat/imkoniyat/imkoniyat/${post.headImage}`} title={post.title} caption={post.body} />
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}
