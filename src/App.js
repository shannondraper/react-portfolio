import React from 'react';
import curve from './images/body-curve.svg';
import './styles.scss';


function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				{/* <p>Edit <code>src/App.js</code> and save to reload!!!!</p> */}
				
				{/* <a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>Learn React</a> */}
				<h1>Shannon <br />Draper</h1>
				<div className="spacer"></div>
				<img className="curve" src={curve} alt="curve" />
			</header>
			<div className="body">
				<h2>This is the body section.</h2>
			</div>
		</div>
	);
}

export default App;
