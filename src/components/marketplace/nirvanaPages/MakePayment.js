// Modules
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import person2 from "../../../styles/assets/person2.jpg";
//import nirvana  from "../../../styles/assets/nirvana.png";

// This will be our "Make a Payment Page."

const MakePayment = () => {

    const navigate = useNavigate();

    const [makePaymentModal, setMakePaymentModal] = useState(false);
    const toggle = () => setMakePaymentModal(!makePaymentModal);

    const handleSubmit = (event) => {
          event.preventDefault();
          // Event Handler for MakePayment input fields
          console.log(`hello`);
          navigate('/Nirvana',
          )}

  return (
    <div className="wrapper">
      <div className="mkPayments">
        <h2>Make a payment.</h2>
        <p>Please Complete the fields below.</p>
        <form className="formMaster" onSubmit={(event) => handleSubmit(event)}>
          <div className="fromBox">
            <label htmlFor="From">From: </label>
            <input type="text" name="From" required />
          </div>
          <div className="toBox">
            <label htmlFor="To">To:</label>
            <input type="text" name="To" required />
          </div>
          <div className="amountBox">
            <label htmlFor="Amount">Amount:</label>
            <input type="text" name="Amount" required />
          </div>
          <div className="paymentNoteBox">
            <label htmlFor="Note">Note:</label>
            <input type="text" name="Note" required />
          </div>
        </form>
        <div className="makePaymentButton">
          <Button onClick={toggle}>Make Payment</Button>
          <Modal
            isOpen={makePaymentModal}
            toggle={toggle}
            size="xl"
          >
            <ModalHeader style={{ borderBottom: "none" }}>
              Are you sure you want to make payment
            </ModalHeader>
            <ModalBody>
              <img
                src={person2}
                alt="profile-pic"
                width={"100px"}
                height={"100px"}
                style={{ "border-radius": "50%", objectFit: "cover" }}
              />
              <table>
                <tr>
                  <td>Name: </td>
                  <td>Noah Brown</td>
                </tr>
                <tr>
                  <td>City: </td>
                  <td>Toronto</td>
                </tr>
                <tr>
                  <td>Age: </td>
                  <td>32</td>
                </tr>
                <tr>
                  <td>Gender: </td>
                  <td>M</td>
                </tr>
              </table>
            </ModalBody>
            <ModalFooter style={{ borderTop: "none" }}>
              <Button>YES, MAKE PAYMENT</Button>
              <Button onClick={toggle}>NO, GO BACK TO MAKE SCREEN</Button>
            </ModalFooter>

          </Modal>
       
        </div>
      </div>
    </div>
  );
};

export default MakePayment;
