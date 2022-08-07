import React from "react";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";

export default class DropdownMessage extends React.Component {
	constructor(props) {
		super(props);

		this.toggle1 = this.toggle1.bind(this);

		this.state = {
			dropdownOpen: false
		};
	}

	toggle1() {
		this.setState((prevState) => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}

	render() {
		return (
			<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle1}>
				<DropdownToggle caret>Share with </DropdownToggle>
				<DropdownMenu>
					<DropdownItem color="primary">Friends</DropdownItem>
					<DropdownItem>Work</DropdownItem>
					<DropdownItem>Family</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		);
	}
}
