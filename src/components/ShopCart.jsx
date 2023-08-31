import React from 'react';
import "./styles/ShopCart.scss";
import Cart from './Cart';
import { useDispatch, useSelector } from 'react-redux';
import {checkout , clear} from "../redux/cart/cartAction";
import { Link } from 'react-router-dom';

const ShopCart = () => {
    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();
    return (
        <div className='container'>
        <div className='shopcart'>
            {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
        </div>
        {
        state.itemsCounter > 0 && 
        <div className='total'>
            <span>Total Item:   {state.itemsCounter}</span> <br></br><br></br>
            <span>Total Payments:   {state.total}$</span>
            <div className='kharid'>
                <button onClick={()=>dispatch(checkout())}>Checkout</button>
                <button onClick={()=>dispatch(clear())}>Clear</button>
            </div>
        </div>
        }
        {
            state.checkout &&
            <div className='checkout'>
            <h3>Checked Out Successfully</h3>
            <Link to="/products">Buy More?</Link></div>
        }
        {
            !state.checkout && state.itemsCounter === 0 &&
            <div className='clear'>
            <h3>Want to buy?</h3>
            <Link to="/products">Go to shop</Link></div>
        }
        
        </div>
        
        
    );
};

export default ShopCart;