import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Nav, NavItem, NavLink, Row, Col, Container } from "reactstrap";
import MessageList from "./MeComponents/messagesList";
import MarketPlace from "./MeComponents/marketPlace";
import Message from "./MeComponents/message";
import SavedPost from "./MeComponents/savedPost";
import VerificationStatus from "./MeComponents/verificationStatus";
import MeMain from "./MeComponents/MeMain";

import "./MeNav.css";
import SavedPostPage from "./MeComponents/SavedPostPage";

class MeNav extends Component {
	render() {
		return (
			<Row>
				<Col className="col-3 mx-0 px-0 border-end">
					<div className="mx-5">
						<Nav vertical className="mx-0 nav text-start">
							<NavItem className="border-bottom navItem">
								<NavLink>
									<Link className="link-dark" to="MessageList/">
										MessageList
									</Link>
								</NavLink>
							</NavItem>

							<NavItem className="navItem">
								<NavLink>
									<Link className="link-dark" to="MarketPlace/">
										MarketPlace
									</Link>
								</NavLink>
							</NavItem>

							<NavItem className="navItem">
								<NavLink>
									<Link className="link-dark" to="Message/">
										Message
									</Link>
								</NavLink>
							</NavItem>

							<NavItem className="border-bottom navItem">
								<NavLink>
									<Link className="link-dark" to="VerficationStatus/">
										Verfication Status
									</Link>
								</NavLink>
							</NavItem>

							<NavItem className="navItem">
								<NavLink>
									<Link className="link-dark" to="savedPost/">
										Saved Post
									</Link>
								</NavLink>
							</NavItem>
						</Nav>
					</div>
				</Col>
				<Col className="col-9">
					<Routes>
						<Route exact path="/" element={<MeMain />} />
						<Route exact path="MessageList/*" element={<MessageList />} />
						<Route exact path="MarketPlace/*" element={<MarketPlace />} />
						<Route exact path="Message/*" element={<Message />} />
						<Route
							exact
							path="VerficationStatus/*"
							element={<VerificationStatus />}
						/>
						<Route exact path="SavedPost/*" element={<SavedPostPage />} />
						{/*was SavedPost before, but that was a Class Based React Component*/}
					</Routes>
				</Col>
			</Row>
		);
	}
}

export default MeNav;
