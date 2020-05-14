import React, { Fragment } from 'react';

const SearchBox = ({ searchField, searchChange }) =>{
    return(
        <Fragment>
            <input 
                className=' pa3 ma2 w-30 ba b--green bg-lightest-blue br-pill'
                type='search' 
                placeholder='Search'
                onChange={searchChange}
            />
        </Fragment>
    );
}

export default SearchBox