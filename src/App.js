import "./App.css";
import Header from "./components/Header/Header.js";
import SearchBar from "./components/SearchBar/SearchBar.js";

function App() {
	const name = "wilfredo_flores();";

	return (
		<div className="App">
			<Header company={name} />
			<SearchBar />
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
