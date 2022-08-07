import React, { Component } from "react";
import { Card, Row, Col } from "reactstrap";
import PieChart from "../../PieChart/PieChart";

class VerificationStatus extends Component {
	render() {
		return (
			<div className="px-3 py-3">
				<Row className="row-lg-1">
					<Col className="col-12 border text-start">Authitic User</Col>
				</Row>
				<Row className="row-4 py-3">
					<Col className="col-7 border me-5">2</Col>
					<Col className="col-4">
						<Row className="border py-5 mb-3">3</Row>
						<Row className="border py-5"></Row>
					</Col>
				</Row>
				<Row className="row-2">
					<Col className="border">5</Col>
				</Row>
				<PieChart />
			</div>
		);
	}
}

export default VerificationStatus;
