import React from "react";

import classes from "./UserInputsErrorModal.module.css";
import alert from "./stockalert.png";

const UserInputsErrorModal = (props) => {
  return (
    <div onClick={props.onConfirm} className={classes.backdrop}>
      <div className={classes.modal}>
        <img src={alert} width="10%" height="10%" />
        <br />
        <h4>An Error Has Occured!</h4>
        <p>Please take a selfie before submission.</p>
        <span>
          <button className={classes.button}>DISMISS</button>
        </span>
      </div>
    </div>
  );
};

export default UserInputsErrorModal;
