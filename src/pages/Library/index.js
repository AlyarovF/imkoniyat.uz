import React, { useState, useEffect } from "react"
import Footer from "../../components/Footer"
import Documents from "./documents"
import './index.css'
import { useTranslation } from "react-i18next"
import api from '../../api/posts'
import { useNavigate } from "react-router-dom"
import { hot } from 'react-hot-loader/root';

const Library = () => {
    const [posts, setPosts] = useState([]);
    const menuId = "library"

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await api.get(`/post?menuId=${menuId}`);
            setPosts(res.data.data);
        };


        fetchPosts();
    }, []);

    const { t } = useTranslation()
    let navigate = useNavigate()
    return (
        <>
            <div className="library">
                <h1>{t("library_title")}</h1>
                {
                    posts.map((post) => {

                        return (
                            <Documents title={post.title} caption={post.body} document={`https://api.mamadaliyev.uz/imkoniyat/${post.headImage}`} />
                        )
                    })
                }
            </div>
            <Footer />
        </>
    )
}

export default Library