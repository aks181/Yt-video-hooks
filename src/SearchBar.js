import React, { useState } from 'react';

const SearchBar = ({ toReceive }) => {
    const [ term, setTerm ] = useState('');

     const onInputChange = (event) => {
        setTerm(event.target.value);
    };
    
    const onFormSubmit = (event) => {
        event.preventDefault();       
        toReceive(term);
    };

    return(
        <div className="ui segment">
            <form className="ui form" onSubmit={onFormSubmit} >
                <div className="ui fluid large icon input">                    
                    <input 
                        type="text"
                        placeholder="Search" 
                        onChange={(e) => setTerm(e.target.value)}                           
                    />
                    <i className="search link icon" onClick={onFormSubmit}></i>                    
                </div>
            </form>
        </div>
    );
}

export default SearchBar;