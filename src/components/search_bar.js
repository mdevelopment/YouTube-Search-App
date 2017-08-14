import React from 'react';
import ReactDOM from 'react-dom';



/*  BElOW IS A FUNCTIONAL COMPONENT // Functional components do not have Built in States
const SearchBar = () => {
return <input/>
}
*/

/*BELOW IS A CLASS BASED component more powerful, changes, self aware of information*/
class  SearchBar extends React.Component {
  constructor(props) {
    super(props);
   this.state = {term: ''}
  }

 render () {
    // return <input onChange={this.onInputChange} />;
    return (
      <div className="search-bar">
      <input
      value={this.state.term}
      onChange={event => this.onInputChange(event.target.value) } />
    {/*  Value of the input: {this.state.term}  NOTE JSX COMMENTS ARE WRAPPED
    IN THOSE EXTRA CURLY BRACKETS
    */}
      </div>
    );
 }
 onInputChange(term) {

 this.setState({term: this.props.onSearchTermChange(term)})

 }
}


export default SearchBar;
