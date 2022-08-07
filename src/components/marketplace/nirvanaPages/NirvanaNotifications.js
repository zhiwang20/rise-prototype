import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

// This will be our "Notifications Page."

const NirvanaNotifications = () => {
  
  return (
    <div className="wrapper">
      <div className="nirvanaNotifications">
        <h2>Notifications:</h2>
        <div className="listOfNotifications">
          <ul>
            <li>April 11 2022</li>
            <li>We've recieved your transfer.</li>
            <li>
              Hello Georges Brown, you sent $50.00 to Olumide Oyekale. If you
              did not perform this transaction, please send an email to
              help@riseapp.com
            </li>
          </ul>

          <hr></hr>

          <ul>
            <li>Transation Notification:</li>
            <li>You just sent $100 to Mia Wang.</li>
          </ul>

          <hr></hr>

          <ul>
            <li>April 10 2022</li>
            <li>
              You have just requested $30.00 from Jayashree. Please check the
              fullfilled payment page to see if your request has been met.
            </li>
          </ul>

          <hr></hr>

          <ul>
            <li>March 22 2022</li>
            <li>We've Recieved Your Transfer.</li>
            <li>
              {" "}
              Hello Georges Brown, you sent $350.00 to Olumide Oyekale. If you
              did not perform this transaction, please send an email to
              help@riseapp.com
            </li>
          </ul>
          <hr></hr>
          <ul>
            <li>Transation Notification:</li>
            <li>You just sent $160 to Mia Wang.</li>
          </ul>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default NirvanaNotifications;
