import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Sidebar from '../components/Sidebar';

const LienHe = () => {

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
                        <form action="" className="frmContact">
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
                                    <option value="-1">-- Chọn giới tính --</option>
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