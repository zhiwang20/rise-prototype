import { render } from "@testing-library/react";
import React from "react";
import MessageContent from "./MessageContent";

const DUMMY_DATA = [
  {
    senderId: "Brooke",
    text: "Hey, How is it going",
  },
  {
    senderId: "Me",
    text: "Great, How about you?",
  },
  {
    senderId: "Brooke",
    text: "Good to hear, I am great as well",
  },
];

class MessageList extends React.Component {
  render() {
    //console.log(DUMMY_DATA);
    return (
      <div className="message-list">
        {DUMMY_DATA.map((message, index) => {
          return (
            <div key={index} className="message">
              {/* <div className="message-username">{message.senderId}</div> */}
              <MessageContent text={message.text} senderId={message.senderId} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default MessageList;
