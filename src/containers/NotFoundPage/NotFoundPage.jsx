import { useLocation } from 'react-router-dom';

import notfound from '../../images/NotFound/notfound.png'
import './NotFoundPage.css';

const NotFoundPage = () => {
    let location = useLocation();



    return (
        <div className="notfound__container">
            <div className="fotfound__image">
                <img src={notfound} alt="Page Not Found" />
            </div>
            <div className="notfound__text">
                No match for {location.pathname}
            </div>
        </div>
    )
}

export default NotFoundPage;