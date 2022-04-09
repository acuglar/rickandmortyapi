import { Component } from 'react';
import CardChar from '../CardChar';

class Chars extends Component {
	render() {
		return (
			<div>
				{this.props.characters.map(char => (
					<CardChar key={char.id} char={char} />
				))}
			</div>
		);
	}
}

export default Chars;
