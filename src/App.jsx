import { Component } from 'react';
import Chars from './components/Chars';
import './App.css';
import logo from './images/logo.png';

class App extends Component {
	state = {
		characters: [],
		next: '',
		prev: '',
		page: 1,
	};

	handleFetch = () => {
		const { page } = this.state;
		fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
			.then(response => response.json())
			.then(response =>
				this.setState({
					characters: response.results,
					next: response.info.next,
					prev: response.info.prev,
				})
			)
			.catch(error => console.log(error));
	};

	componentDidMount() {
		this.handleFetch();
	}

	componentDidUpdate(prevProps, prevState) {
		const { page } = this.state;
		console.log(
			'currState: ',
			this.state.prev,
			this.state.next,
			'\n',
			'prevState: ',
			prevState
		);
		if (page !== prevState.page) {
			this.handleFetch();
		}
	}

	handleNext = () => {
		const { page, next } = this.state;
		if (next) {
			this.setState({ page: page + 1 });
		}
	};

	handlePrev = () => {
		const { page, prev } = this.state;
		if (prev) {
			this.setState({ page: page - 1 });
		}
	};

	render() {
		const { characters } = this.state;
		return (
			<div className='App'>
				<div className='menu'>
					<img className='logo' src={logo} alt='logo' />
					<div className='btn-container-outer'>
						<div className='btn-container'>
							<button className='pulse' onClick={this.handlePrev}>
								Prev
							</button>
							{this.state.page}
							<button className='pulse' onClick={this.handleNext}>
								Next
							</button>
						</div>
					</div>
				</div>
				<Chars characters={characters} />
			</div>
		);
	}
}

export default App;
