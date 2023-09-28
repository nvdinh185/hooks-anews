function Menu() {
    return (
        <div id="menu">
            <ul>
                <li><a href="/" title="">Trang chủ</a></li>
                <li className="active"><a href="/tintuc" title="">Tin tức</a></li>
                <li><a href="/lienhe" title="">Liên hệ</a></li>
            </ul>
            <div className="clr"></div>
        </div>
    )
}

export default Menu;