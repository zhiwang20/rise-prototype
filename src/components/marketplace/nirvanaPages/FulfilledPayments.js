import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

// This will be our "Fulfilled Payments Page."

const FulfilledPayments = () => {
  return (
    <div className="wrapper">
      <div className="fulfilledPayments">
        <h2>Fulfilled Payments:</h2>
        <div className="listOfFullfilledPayments">
          <ul>
            <li>April 11 2022</li>
            <li>Payment Request Fulfilled</li>
            <li>
              Hello Georges Brown, your $10.00 request from Olumide Oyekale. Has
              been fullfilled. Please check your wallet balance.
            </li>
          </ul>

          <hr></hr>

          <ul>
            <li>April 8 2022</li>
            <li>Payment Request Fulfilled</li>
            <li>
              Hello Georges Brown, your $15.00 request from Olumide Oyekale. Has
              been fullfilled. Please check your wallet balance.
            </li>
          </ul>

          <hr></hr>

          <ul>
            <li>April 6 2022</li>
            <li>Payment Request Fulfilled</li>
            <li>
              Hello Georges Brown, your $45.00 request from Olumide Oyekale. Has
              been fullfilled. Please check your wallet balance.
            </li>
          </ul>

          <hr></hr>

          <ul>
            <li>March 20 2022</li>
            <li>We've Recieved Your Transfer.</li>
            <li>
              Hello Georges Brown, your $12.00 request from Olumide Oyekale. Has
              been fullfilled. Please check your wallet balance.
            </li>
          </ul>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default FulfilledPayments;
