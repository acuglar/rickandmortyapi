import { Component } from 'react';

class CardChar extends Component {
	render() {
		return (
			<div>
				<label>{`${this.props.char.name} ${this.props.char.origin.name}`}</label>
				<img src={this.props.char.image} alt={this.props.char.name} />
			</div>
		);
	}
}

export default CardChar;
