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
		const { page } = this.state;
		console.log(prevState);
		if (page !== prevState.page) {
			this.handleFetch();
		}
	}

	handleNext = () => {
		const { page } = this.state;
		if (page < 42) {
			this.setState({ page: page + 1 });
		}
	};

	handlePrev = () => {
		const { page } = this.state;
		if (page > 1) {
			this.setState({ page: page - 1 });
		}
	};

	render() {
		const { characters } = this.state;
		return (
			<div className='App'>
				<Chars characters={characters} />
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
