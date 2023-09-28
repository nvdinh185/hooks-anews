import Side from './Side';

function Sidebar() {
    return (
        <>
            <h3>Danh mục tin</h3>
            <ul>
                {Side.listCats.map(cat =>
                    <li key={cat.id}><a href={'/danhmuc/' + cat.id}>{cat.name}</a></li>
                )}
            </ul>
        </>
    )
}

export default Sidebar;