import React from 'react';

class SearchBar extends React.Component {

    state= {
        term: ''
    }

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        // console.log('Searchbar',this.state.term);
        //to do a call back from APP to pass 
        // from searchbar to app
        this.props.toReceive(this.state.term);
    }

    render() {
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit} >
                    <div className="ui fluid large icon input">
                        
                        <input 
                            type="text"
                            placeholder="Search" 
                            onChange={this.onInputChange}                           
                        />
                        <i className="search link icon" onClick={this.onFormSubmit}></i>
                        
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;