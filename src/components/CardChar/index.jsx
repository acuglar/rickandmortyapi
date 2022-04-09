import { Component } from 'react';
import './style.css';

class CardChar extends Component {
	render() {
		return (
			<div className='card'>
				<label>{this.props.char.name}</label>
				<img
					className='picture'
					src={this.props.char.image}
					alt={this.props.char.name}
				/>
				<p>Origin: {this.props.char.origin.name}</p>
			</div>
		);
	}
}

export default CardChar;
