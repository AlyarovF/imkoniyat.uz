import React, { useState, useEffect } from 'react'
import CrContent from '../CrContent'
import SideBar from '../SideBar'
import './index.css'
import Footer from '../../../components/Footer'
import { useTranslation } from 'react-i18next'
import api from '../../../api/posts'

export default function Statute() {
    const [posts, setPosts] = useState([]);
    const menuId = "statute"

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await api.get(`/post?menuId=${menuId}`);
            setPosts(res.data.data);
        };


        fetchPosts();
    }, []);

    const { t } = useTranslation()
    return (
        <div className='Statute'>
            <div className='container'>
                <h1>{t("statue_title")}</h1>
            </div>
            <div className='About container'>
                <SideBar />
                <div className='content'>
                    {
                        posts.map((post) => {
                            return (
                                <CrContent title={post.title} caption={post.body} />
                            )

                        })
                    }
                </div>
            </div>
            <Footer />
        </div >
    )
}
