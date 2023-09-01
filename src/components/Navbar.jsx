import React from 'react';
import { useSelector } from 'react-redux';

//firebase
import firebase from 'firebase/app';
import { auth } from './services/firebase';

//style
import "./styles/Navbar.scss";

//assets
import Wolf from "../assets/wolf.png";
import Mall from "../assets/Mall.png";

//router
import { Link} from "react-router-dom";

const Navbar = () => {

    const state = useSelector(state => state.cartState);

    return (
        <div className='navbar'>

           <div className='navbar-item'>
                <h1>Woshop</h1>
                <img src={Wolf} alt="Logo" />
	        </div>

            <div className='navbar-item2'>
                        
                        <Link to="/cart"><img src={Mall} alt='mall'/><span className='cn'>{state.itemsCounter}</span></Link>
                        <button className="shadow__btn" onClick={()=> auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>Login</button>
                                
            </div>

        </div>
    );
};

export default Navbar;

