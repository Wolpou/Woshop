import React from 'react';
import "../styles/Loader.scss";

const Loader = () => {
    return (
        <div className='lc'>
            <div class="loader">
                <span class="loader-text">loading</span>
                <span class="load"></span>
            </div>
        </div>
    );
};

export default Loader;