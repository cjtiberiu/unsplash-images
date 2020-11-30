import React from 'react';

import './HomePage.css';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

const HomePage = props => {


    return (
        <div className='home-page'>
            {/* <SearchBar 
                onSubmit={props.onSubmit} 
                favouritesNumber={props.favouritesNumber}
            /> */}
            <ImageList 
                images={props.images} 
                handleImage={props.handleImage} 
                handleUrl={props.handleUrl} 
                openModal={() => props.openModal()} 
            />
        </div>
    )
};

export default HomePage;