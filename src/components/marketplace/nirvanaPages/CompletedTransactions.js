// Modules
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import CancelledTransactions from "./CancelledTransactions";

// This will be our "Make a Payment Page."

const CompletedTransactions = () => {
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		// Event Handler for input fields
		console.log(`hello`);
		navigate("/Nirvana");
	};

  return (
    <div className="wrapper">
      <nav className="compTransactionMenu">
        <ul>
          <li>Completed</li>
          <li>
            <Link to="CancelledTransactions">Cancelled</Link>
          </li>
        </ul>
      </nav>
      <div className="completedTransactions">
        <h2>Completed Transactions</h2>
        <p>Search</p>
        <form className="formMaster" onSubmit={(event) => handleSubmit(event)}>
          <div className="searchBar">
            <label htmlFor="searchBar"> </label>
            <input type="text" name="searchBar" required defaultValue={"Search Transactions"}/>
          </div>
        </form>
        <div className="compTransactionInfo">
          <p>April 7 2022</p>

          <table>
            <tr><img src="https://icons.veryicon.com/png/o/business/a-set-of-commercial-icons/money-transfer.png"/> Olumide Oykale - 7:30pm <td>-$10.00</td></tr>
            <hr></hr>
            <tr><img src="https://icons.veryicon.com/png/o/business/a-set-of-commercial-icons/money-transfer.png"/> Jody Cromle - 8:30pm <td>+$100.00</td></tr>
            <hr></hr>
            <tr><img src="https://icons.veryicon.com/png/o/business/a-set-of-commercial-icons/money-transfer.png"/> Olumide Oykale - 9:00pm <td>-$10.00 </td></tr>
            <hr></hr>
            <tr><img src="https://icons.veryicon.com/png/o/business/a-set-of-commercial-icons/money-transfer.png"/> Jody Cromle - 10:30pm <td>+$100.00</td></tr>
          </table>
        </div>
      </div>
      <Routes>
        <Route
          path="CancelledTransactions/*"
          element={
            <div>
              <h4>Cancelled Transactions</h4>
              <CancelledTransactions />
            </div>
          }
        />
      </Routes>
    </div>
  );

};

export default CompletedTransactions;
