import React, {Component} from 'react';


class SearchBar extends Component {
    render(){
        return(
            <div>
                <input onChange= {(event) => console.log(event.target.value)} />
            </div>
        );
    }

    
}

export default SearchBar;