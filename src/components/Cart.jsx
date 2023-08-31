import React from 'react';
import "./styles/Cart.scss";
import { useDispatch } from 'react-redux';
import { shorten } from '../components/services/shorten';
import del from "../assets/del.png";
import {increase,removeItem,decrease} from "../redux/cart/cartAction";

const Cart = (props) => {

    const {image,title,price,quantity}=props.data;
    const dispatch = useDispatch();

    return (
        <div className='cart'>
            <img src={image} alt='image' className='cimage'/>
            <div className='tozih'>
                <h2>{shorten(title)}</h2>
                <p>{price}$</p>
            </div>
            <div className='tedad'>
                <span>{quantity}</span>
            </div>
            <div className='count'>
                {
                    quantity > 1 ? 
                    <button onClick={()=>dispatch(decrease(props.data))}>-</button> :
                    <button className='trash' onClick={()=>dispatch(removeItem(props.data))}><img src={del} alt='image' /></button>
                }
                <button onClick={()=>dispatch(increase(props.data))}>+</button>
            </div>
        </div>
    );
};

export default Cart;