import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';
import PostItem from '../components/PostItem';
import Sidebar from '../components/Sidebar';

const DanhMuc = () => {
    let { cId } = useParams();

    const [listNews, setListNews] = useState([]);
    const [listCats, setListCats] = useState([]);
    useEffect(() => {
        async function fetchData() {
            var news = await axios('http://localhost:3001/anews');
            setListNews(news.data);
            let cats = await axios('http://localhost:3001/acategories');
            setListCats(cats.data);
        }
        fetchData();
    }, []);
    var listNewsByCat = listNews.filter(news => news.catId == cId);
    var catName = listCats.find(cat => cat.id == cId)?.name;

    return (
        <div className="wrapper">
            <Header />

            <Menu />
            <div id="content">
                <div className="content-left fl">
                    <Sidebar />
                </div>
                <div className="content-right fr">
                    <h3>Tin tức :: {catName}</h3>
                    <div className="main-content items-new">
                        <ul>
                            {listNewsByCat.map(news =>
                                <PostItem
                                    key={news.id}
                                    id={news.id}
                                    description={news.description}
                                    detail={news.detail}
                                />
                            )}
                        </ul>
                    </div>
                </div>
                <div className="clr"></div>
            </div>

            <Footer />
        </div>
    )
}

export default DanhMuc;