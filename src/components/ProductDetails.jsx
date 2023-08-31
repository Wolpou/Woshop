import React from 'react';
import "./styles/ProductDetails.scss";
import { useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';


const ProductDetails = () => {
    const params = useParams();
    const id = params.id;
    const data = useSelector(state => state.productsState.products);
    const product = data[id - 1];
    const{image , title , price , description}= product;

    

    return (
        <div className='pd'>
            <div className='dimage'>
               <img src={image} alt='image'/> 
            </div>
            <div className='det'>
                <h3 className='dtitle'>{title}</h3>
                <p className='description'>{description}</p>
                <div className='pb'>
                    <p className='dprice'>{price}$</p>
                </div>
                
            </div>    
                
        </div>
    );
};

export default ProductDetails;