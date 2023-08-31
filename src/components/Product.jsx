import React from 'react';
import "./styles/Product.scss";
import { Link } from 'react-router-dom';
import del from "../assets/del.png";

//functions
import { shorten , isInCart, quantityCount } from './services/shorten';
import { useDispatch, useSelector } from 'react-redux';

//action
import {addItem,removeItem,increase , decrease ,checkout,clear} from "../redux/cart/cartAction";

const Product = ({productdata}) => {

    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();
    
    return (
        <div className='product'>
            <Link to={`/products/${productdata.id}`}><img className='pimage' src={productdata.image} alt='image'/></Link>
            <h3 className='title'>{shorten(productdata.title)}</h3>
               <p className='price'>{productdata.price}$</p>
               <div className='bcard'>
                <div className='counter'>
                    {quantityCount(state,productdata.id) === 1 && <button className='remove' onClick={()=>dispatch(removeItem(productdata))}><img src={del}/></button>}
                    {quantityCount(state,productdata.id) > 1 && <button onClick={()=>dispatch(decrease(productdata))}>-</button>}
                    {quantityCount(state,productdata.id) > 0 && <span className='chandta'>{quantityCount(state,productdata.id)}</span>}
                   {isInCart(state , productdata.id) ? 
                   <button onClick={()=>dispatch(increase(productdata))}>+</button> :
                   <button className='badd' onClick={()=>dispatch(addItem(productdata))}>Add to cart</button>
                   } 
                </div>
                <div className='details'>
                    <Link to={`/products/${productdata.id}`}>Details</Link>
                </div>
               </div>
                
            
        </div>
    );
};

export default Product;