import axios from 'axios';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Sidebar from '../components/Sidebar';

const LienHe = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const el of e.target) {
            if (el.files) {
                formData.append("file", el.files[0]);
            } else if (el.name) {
                formData.append(el.name, el.value);
            }
        }

        try {
            var results = await axios({
                method: "POST",
                url: "http://localhost:3001/news/contact",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });

            //handle success
            console.log('results: ', results);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="wrapper">
            <Header />

            <Menu />
            <div id="content">
                <div className="content-left fl">
                    <Sidebar />
                </div>
                <div className="content-right fr">
                    <h3>Liên hệ</h3>
                    <div className="main-content">
                        <form onSubmit={(e) => handleSubmit(e)} className="frmContact">
                            <p>Vui lòng điền đầy đủ các thông tin liên hệ sau: </p>
                            <div className="row">
                                <label>Họ tên: </label>
                                <input type="text" name="name" />
                            </div>
                            <div className="row">
                                <label>Số điện thoại: </label>
                                <input type="text" name="phone" />
                            </div>
                            <div className="row">
                                <label>Website: </label>
                                <input type="text" name="web" />
                            </div>
                            <div className="row">
                                <label>Giới tính: </label>
                                <select name="gender">
                                    <option value="">-- Chọn giới tính --</option>
                                    <option value="1">Nam</option>
                                    <option value="0">Nữ</option>
                                </select>
                            </div>
                            <div className="row">
                                <label>Ảnh đại diện: </label>
                                <input type="file" name="picture" />
                            </div>
                            <div className="row">
                                <label>Nội dung: </label>
                                <textarea name="content"></textarea>
                            </div>
                            <div className="row">
                                <input type="submit" name="submit" value="Gửi liên hệ" />
                                <input type="reset" name="reset" value="Nhập lại" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="clr"></div>
            </div>

            <Footer />
        </div>
    )
}

export default LienHe;