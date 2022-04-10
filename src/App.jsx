import { Component } from 'react';
import Chars from './components/Chars';
import './App.css';

class App extends Component {
	state = {
		characters: [],
		page: 42,
	};

	handleFetch = () => {
		fetch(`https://rickandmortyapi.com/api/character?page=${this.state.page}`)
			.then(response => response.json())
			.then(response => this.setState({ characters: response.results }))
			.then(console.log('Fetched'))
			.catch(error => console.log(error));
	};

	componentDidMount() {
		this.handleFetch();
	}

	componentDidUpdate(prevProps, prevState) {
		// para evitar componentDidUpdate loop, sempre deve haver uma condição de chamada
		console.log(prevState);
		if (this.state.page !== prevState.page) {
			this.handleFetch();
		}
	}

	handleNext = () => {
		if (this.state.page < 42) {
			this.setState({ page: this.state.page + 1 });
		}
	};

	handlePrev = () => {
		if (this.state.page > 1) {
			this.setState({ page: this.state.page - 1 });
		}
	};

	render() {
		return (
			<div className='App'>
				<Chars characters={this.state.characters} />
				<div>
					<button onClick={this.handlePrev}>Prev</button>
					{this.state.page}
					<button onClick={this.handleNext}>Next</button>
				</div>
			</div>
		);
	}
}

export default App;
