import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Sidebar from '../components/Sidebar';

const ChiTiet = () => {
    let { dId } = useParams();

    const [newsById, setNewsById] = useState([]);
    useEffect(() => {
        async function fetchData() {
            var result = await axios(`http://localhost:3001/anews/${dId}`);
            setNewsById(result.data);
        }
        fetchData();
    }, []);

    return (
        <div className="wrapper">
            <Header />

            <Menu />
            <div id="content">
                <div className="content-left fl">
                    <Sidebar />
                </div>
                <div className="content-right fr">
                    <h3>{newsById.description}</h3>
                    <div className="main-content">
                        <p>{newsById.detail}</p>
                    </div>
                </div>
                <div className="clr"></div>
            </div>

            <Footer />
        </div>
    )

}

export default ChiTiet;