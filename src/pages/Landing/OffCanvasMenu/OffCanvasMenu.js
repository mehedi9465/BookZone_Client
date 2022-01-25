import { Button, Offcanvas } from 'react-bootstrap';
import './OffCanvasMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPepperHot, faAddressCard, faTags } from '@fortawesome/free-solid-svg-icons';

const OffCanvasMenu = ({ show, onHide}) => {

    return (
        <>
        <Offcanvas show={show} onHide={onHide}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title><img src="https://big-skins.com/frontend/foxic-html-demo/images/skins/food/logo-food.webp" alt="" /></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <ul className='d-flex flex-column justify-content-center offCanvasMenu'>
                <li><a href=""><FontAwesomeIcon icon={faHome}/> &nbsp; &nbsp; HOME</a></li>
                <li><a href=""><FontAwesomeIcon icon={faPepperHot}/> &nbsp; &nbsp; FOODS</a></li>
                <li><a href=""><FontAwesomeIcon icon={faAddressCard}/> &nbsp; &nbsp; ABOUT</a></li>
                <li><a href=""><FontAwesomeIcon icon={faTags}/> &nbsp; &nbsp; DISCOUNTS</a></li>
            </ul>
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
};

export default OffCanvasMenu;