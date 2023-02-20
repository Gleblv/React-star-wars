import PropTypes from 'prop-types';

import './UINavButton.css';

const UINavButton = ({text, onClick, disabled, theme='dark-nav__btn'}) => {
    return (
        <>
            <button 
                onClick={onClick} 
                disabled={disabled} 
                className={`nav__btn ${theme}`}
            >
                {text}
            </button>
        </>
    )
}

UINavButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

export default UINavButton;