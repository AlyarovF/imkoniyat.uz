import React, { useState, useEffect } from 'react'
import CrContent from '../CrContent'
import './index.css'
import Footer from '../../../components/Footer'
import { useTranslation } from 'react-i18next'
import api from '../../../api/posts'

export default function Seminars() {
    const [posts, setPosts] = useState([]);
    const menuId = "seminars"

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await api.get(`/post?menuId=${menuId}`);
            setPosts(res.data.data);
        };


        fetchPosts();
    }, []);

    const { t } = useTranslation()
    return (
        <div className='Seminars-js'>
            <div className='heading'>
                <div className='container'>
                    <div className='text'>
                        <h1>{t("seminars_title")}</h1>
                        <h3>{t("seminars_caption")}</h3>
                    </div>
                </div>
            </div>
            <div className='Seminars container'>
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
