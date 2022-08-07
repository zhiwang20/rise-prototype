// Modules
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import CompletedTransactions from "./CompletedTransactions";

// This will be our "Make a Payment Page."

const CancelledTransactions = () => {
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		// Event Handler for input fields
		console.log(`hello`);
		navigate("/Nirvana");
	};

  return (
    <div className="wrapper">
      <nav className="cancTransactionMenu">
        <ul>
          <li>Cancelled Transactions</li>
          <li>
            <Link to="CompletedTransactions">Completed</Link>
          </li>
        </ul>
      </nav>
      <div className="cancelledTransactions">
        <h2>Cancelled Transactions</h2>
        <p>Search</p>
        <form className="formMaster" onSubmit={(event) => handleSubmit(event)}>
        <div className="searchBar">
            <label htmlFor="searchBar"> </label>
            <input type="text" name="searchBar" required defaultValue={"Search Transactions"}/>
          </div>
        </form>
        <div className="cancTransactionInfo">
          <p>April 7 2022</p>

          <ul>
            <tr><img src ="https://cdn.iconscout.com/icon/free/png-256/close-1912235-1617704.png"/> Olumide Oykale - 7:30pm <td>$10.00: Request</td></tr>
            <hr></hr>
            <tr><img src ="https://cdn.iconscout.com/icon/free/png-256/close-1912235-1617704.png"/> Jody Cromle - 8:30pm <td>$100.00: Payment</td></tr>
            <hr></hr>
            <tr><img src ="https://cdn.iconscout.com/icon/free/png-256/close-1912235-1617704.png"/> Olumide Oykale - 9:00pm <td>$10.00: Request</td></tr>
            <hr></hr>
            <tr><img src ="https://cdn.iconscout.com/icon/free/png-256/close-1912235-1617704.png"/> Jody Cromle - 10:30pm <td>$100.00: Payment</td></tr>
          </ul>
        </div>
      </div>
      <Routes>
        <Route
          path="CompletedTransaction/*"
          element={
            <div>
              <h4>Completed Transactions</h4>
              <CompletedTransactions />
            </div>
          }
        />
      </Routes>
    </div>
  );

};

export default CancelledTransactions;
