import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { Nav, NavItem, NavLink, Container } from "reactstrap";
import MessageList from "./MeComponents/messagesList";
import MeNav from "./MeNav";

class Me extends Component {
	render() {
		return <MeNav />;
	}
}

export default Me;
