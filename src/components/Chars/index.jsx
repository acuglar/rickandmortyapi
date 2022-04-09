import { Component } from 'react';
import CardChar from '../CardChar';
import './style.css';

class Chars extends Component {
	render() {
		return (
			<div>
				<h2>Rick and Morty Characters</h2>
				<div className='container'>
					{this.props.characters.map((char, index) => (
						<CardChar key={index} char={char} />
					))}
				</div>
			</div>
		);
	}
}

export default Chars;
