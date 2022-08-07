import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap";
import NewMessageModal from "./NewMessageModal";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewMessage: false,
      date: new Date().toLocaleString(),
    };
  }

  render() {
    return (
      <Card className="lg mx-3 my-3">
        <div className="mx-3 my-3">
          <CardTitle className="border-bottom">
            <Row>
              <Col className="text-start mx-3">To xxx</Col>
              <Col className="text-end mx-3">{this.state.date}</Col>
            </Row>
          </CardTitle>
          <CardText className="text-start mx-3">
            Each message costs 0.01 Nirvana{" "}
          </CardText>
        </div>
        <Button onClick={() => this.setState({ showNewMessage: true })}>
          New Message
        </Button>
        {this.state.showNewMessage && <NewMessageModal />}
      </Card>
    );
  }
}

export default Message;
