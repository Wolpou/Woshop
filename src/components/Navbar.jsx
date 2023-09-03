import React from 'react';
import { useSelector } from 'react-redux';

//style
import "./styles/Navbar.scss";

//assets
import Mall from "../assets/Mall.png";
import wolf from "../assets/wolf.png";

//router
import { Link} from "react-router-dom";

const Navbar = () => {

    const state = useSelector(state => state.cartState);

    return (
        <div className='navbar'>

           <div className='navbar-item'>
                <h1>Woshop</h1>
                <img src={wolf} alt="Logo" />
	        </div>

            <div className='navbar-item2'>
                        
                        <Link to="/cart"><img src={Mall} alt='mall'/><span className='cn'>{state.itemsCounter}</span></Link>
                                
            </div>

        </div>
    );
};

export default Navbar;

