import "bootstrap/dist/css/bootstrap.css";

import { Input } from "reactstrap";

import React, { useState } from "react";
import DropdownMessage from "../DropdownMenus/DropdownMessage";
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";
const PaymentModal = () => {
	const [modal2, setModal2] = React.useState(false);

	// Toggle2 for Modal
	const toggle2 = () => setModal2(!modal2);

	return (
		<div style={{ marginLeft: " 2%" }}>
			<div></div>

			<Modal isOpen={modal2} toggle={toggle2}>
				<ModalHeader toggle={toggle2}>Add Payment</ModalHeader>
				<ModalBody>
					<p>Payment Amount</p>
					<div style={{ display: "flex" }} className="mb-3">
						<p className="mt-3">$</p>
						<Input
							id="unmountOnClose"
							name="unmountOnClose"
							onChange={function noRefCheck() {}}
							type="input"
							placeholder="0.00">
							{" "}
						</Input>
					</div>

					<Input
						id="unmountOnClose"
						name="unmountOnClose"
						onChange={function noRefCheck() {}}
						type="textarea"
						placeholder="Say something..."
						className="textareaModal"></Input>
				</ModalBody>
				<ModalFooter>
					<DropdownMessage />

					<Button className="bg-dark" onClick={toggle2}>
						Send
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default PaymentModal;
