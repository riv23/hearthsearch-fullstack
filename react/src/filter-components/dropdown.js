import React from 'react'

export default class DropDown extends React.Component {

	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this);

	}

	renderOptions(array) {
		return array.map((item) => {
			return (
				<option value={item} key={item} className='small-text'>
					{item}
				</option>
			)
		})
	}

	handleChange(event) {
		this.props.onChange(event.target.value);
	}

	render() {
		return (
			<div>
				<select className='filter-dropdown' onChange={this.handleChange}>
					{this.renderOptions(this.props.options)}
				</select>
			</div>
		)	
	}
	
}