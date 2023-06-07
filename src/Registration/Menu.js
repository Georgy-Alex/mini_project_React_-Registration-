import { Link } from "react-router-dom"
import './herost.css';
function Menu() {
    return (
        <div className="menu">
            <ul>
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/data">Данные</Link></li>
                <li><Link className="link" to="/school">Выбор школы</Link></li>
            </ul>
        </div>
    );
};

export default Menu