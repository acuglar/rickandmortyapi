import { Component } from 'react';
import './style.css';

class CardChar extends Component {
	render() {
		const { name, image } = this.props.char;
		return (
			<div className='card'>
				<label>{name}</label>
				<img className='picture' src={image} alt={name} />
			</div>
		);
	}
}

export default CardChar;
