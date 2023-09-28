import { Link } from "react-router-dom";
import Data from './Data';

function Sidebar() {
    return (
        <>
            <h3>Danh mục tin</h3>
            <ul>
                {Data.listCats.map(cat =>
                    <li key={cat.id}><Link to={'/danhmuc/' + cat.id}>{cat.name}</Link></li>
                )}
            </ul>
        </>
    )
}

export default Sidebar;