// Modules
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import person1 from "../../../styles/assets/person1.jpg";

// This will be our "Make a Payment Page."

const RequestPayment = () => {
  const navigate = useNavigate();

  const [reqPaymentModal, setReqPaymentModal] = useState(false);
  const toggle = () => setReqPaymentModal(!reqPaymentModal);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Event Handler for MakePayment input fields
    console.log(`hello`);
    navigate("/Nirvana");
  };


  return (
    <div className="wrapper">
      <div className="reqPayments">
        <h2>Request a payment.</h2>
        <p>Please Complete the fields below.</p>
        <form className="formMaster" onSubmit={(event) => handleSubmit(event)}>
          <div className="fromBox">
            <label htmlFor="From">From </label>
            <br></br>
            <select type="text" name="From" required>
            <option> Enter Recipient Name </option> 
            <option> Brooke Weaver </option> 
            <option> Han Noguchi </option>
            <option> Jessie Lake </option>
            </select>
          </div>
          <div className="toBox">
            <label htmlFor="To">To:</label>
            <br></br>
            <select type="text" name="To" required>
            <option> Account Name </option> 
            </select>
          </div>
          <div className="amountBox">
            <label htmlFor="Amount">Amount:</label>
            <br></br>
            <input type="text" name="Amount" defaultValue="$0.00" required />
          </div>
          <div className="paymentNoteBox">
            <label htmlFor="Note">Note:</label>
            <br></br>
            <input type="text" name="Note" defaultValue="Enter Note" required />
          </div>
        </form>
        <div className="reqPaymentButton">
          <Button onClick={toggle}>Request Payment</Button>
          <Modal
            isOpen={reqPaymentModal}
            toggle={toggle}
            size="xl"
            // style={{ maxWidth: "700px", width: "100%" }}
          >
            <ModalHeader style={{ borderBottom: "none" }}>
              Are you sure you want to request payment from Mia Wang with the
              following details?
            </ModalHeader>
            <ModalBody>
              <img
                src={person1}
                alt="profile-pic"
                width={"100px"}
                height={"100px"}
                style={{ "border-radius": "50%", objectFit: "cover" }}
              />
              <table>
                <tr>
                  <td>Name: </td>
                  <td>Mia Wang</td>
                </tr>
                <tr>
                  <td>City: </td>
                  <td>Ottawa</td>
                </tr>
                <tr>
                  <td>Age: </td>
                  <td>27</td>
                </tr>
                <tr>
                  <td>Gender: </td>
                  <td>F</td>
                </tr>
              </table>
            </ModalBody>
            <ModalFooter style={{ borderTop: "none" }}>
              <Button>YES, REQUEST FOR PAYMENT</Button>
              <Button onClick={toggle}>NO, GO BACK TO REQUEST SCREEN</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default RequestPayment;
