import React from 'react';

const SearchBox = ({searchChange}) => {  //destructuing here allows us to grabe the props object and grab its properties
    
    return (
        <div className='pa2'> 
        <input 
        className='pa3 ba b--green bg-lightest-blue' //tachions padding 3 background lightest blue.
        type = 'search' 
        placeholder = 'search robots' 
        onChange= {searchChange} // onChange is an html event anytime the input changes will call the searchChange function in App.js
        />
        </div>
    );
}

export default SearchBox;