import { Component } from 'react';
import CardChar from '../CardChar';
import './style.css';

class Chars extends Component {
	render() {
		const { characters } = this.props;
		return (
			<div>
				<h2>Rick and Morty Characters</h2>
				<div className='container'>
					{characters.map((char, index) => (
						<CardChar key={index} char={char} />
					))}
				</div>
			</div>
		);
	}
}

export default Chars;
