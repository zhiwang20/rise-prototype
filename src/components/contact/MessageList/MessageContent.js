import React from 'react'

const MessageContent = (props) => {
  if (props.senderId == "Me") {
    return (
      <div>
        <p className="message-me-id">{props.senderId}</p>
        <div className="message-me-text">{props.text}</div>
      </div>
    )
  }
  else {
    return (
      <div>
        <p className="message-opp-id">{props.senderId}</p>
        <div className="message-opp-text">{props.text}</div>
      </div>
    )
  }
}

export default MessageContent