import "./App.css";
import Header from "./components/Header/Header.js";
import SearchBar from "./components/SearchBar/SearchBar.js";
import SearchHistory from "./components/SearchHistory/SearchHistory";
import { useState } from 'react';

function App() {
	const name = "wilfredo_flores();";
  const [terms, setTerms] = useState(['new hope', 'empire']);

  function addTerm(term) {
    setTerms([term, ...terms])
  }

	return (
		<div className="App">
			<Header company={name} />
			<SearchBar term={terms[0]} addTerm={addTerm}/>
      <SearchHistory terms={terms} />
		</div>
	);
}

export default App;

// class based components
// import React from 'react';
// export default class App extends React.Component{
//   constructor(props) {
//     super(props)
//   }
//   render(){
//     return <div className="App"> </div>;
//   }
// }
