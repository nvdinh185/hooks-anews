import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import TinTuc from "./pages/TinTuc";
import DanhMuc from "./pages/DanhMuc";

const App = () => {

    return (
        <>
            <Router>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/tintuc">Tin Tức</Link>
                    </li>
                    <li>
                        <Link to="/danhmuc">Danh Mục</Link>
                    </li>
                </ul>
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/tintuc' element={<TinTuc />} />
                    <Route path='/danhmuc' element={<DanhMuc />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;