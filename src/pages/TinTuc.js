import axios from 'axios';
import { useState, useEffect } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';
import PostItem from '../components/PostItem';
import Sidebar from '../components/Sidebar';

const App = () => {

    const [listNews, setListNews] = useState([]);
    useEffect(() => {
        async function fetchData() {
            var result = await axios('http://localhost:3001/anews');
            setListNews(result.data);
        }
        fetchData();
    }, []);

    return (
        <>
            <div className="wrapper">
                <Header />

                <Menu />
                <div id="content">
                    <div className="content-left fl">
                        <Sidebar />
                    </div>
                    <div className="content-right fr">
                        <h3>Tin tức</h3>
                        <div className="main-content items-new">
                            <ul>
                                {listNews.map(news =>
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
        </>
    )
}

export default App;