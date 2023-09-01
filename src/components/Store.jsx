import { useSelector , useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import "./styles/Store.scss";
import Product from './Product';
import {fetchProducts} from "../redux/products/productsAction";
import Loader from './services/Loader';



const Store = () => {

    const dispatch = useDispatch();
    const productsState = useSelector((state) => state.productsState);

    useEffect(()=> 
     dispatch(fetchProducts())
    ,[]);
    
    return (
        
        <div className='store'>


                {
                    productsState.loading  ?
                   <Loader className="loaderinstore"></Loader>:
                    productsState.error ?
                    <p>Something went wrong</p> :
                    productsState.products.map(
                        product => <Product 
                                key={product.id}
                                productdata ={product}
                        />
                    )
                }
        </div>
    );
};

export default Store;