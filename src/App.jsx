import { Component } from 'react';
import Chars from './components/Chars';
import './App.css';

class App extends Component {
	state = {
		characters: [],
	};

	componentDidMount() {
		fetch('https://rickandmortyapi.com/api/character')
			.then(response => response.json())
			.then(response => this.setState({ characters: response.results }));

		console.log(this.state.characters); // []
	}

	render() {
		console.log(this.state.characters); // (20) [{...}]

		return (
			<div className='App'>
				<Chars characters={this.state.characters} />
			</div>
		);
	}
}

export default App;
