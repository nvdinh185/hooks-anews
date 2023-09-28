function PostItem(props) {
    return (
        <li>
            <h2>
                <a href={"chitiet.html?did=" + props.id} title="">{props.description}</a>
            </h2>
            <div className="item">
                <p>{props.detail}</p>
                <div className="clr"></div>
            </div>
        </li>
    )
}

export default PostItem;