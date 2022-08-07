import React from "react";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";

export default class DropdownCategory extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState((prevState) => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}

	render() {
		return (
			<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
				<DropdownToggle caret className="dropdownMenuCategory">
					Category
				</DropdownToggle>
				<DropdownMenu>
					<DropdownItem>Vehicles</DropdownItem>
					<DropdownItem>Property Rental</DropdownItem>
					<DropdownItem>Apparels</DropdownItem>
					<DropdownItem>Classifields</DropdownItem>
					<DropdownItem>Electronics</DropdownItem>
					<DropdownItem>Entertainment</DropdownItem>
					<DropdownItem>Family</DropdownItem>
					<DropdownItem>Free Stuff</DropdownItem>
					<DropdownItem>Garden & Outdoors</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		);
	}
}
