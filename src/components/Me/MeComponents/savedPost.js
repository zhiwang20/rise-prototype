import React, { Component } from "react";
import { Card, CardImg, CardText, CardTitle, Row, Col } from "reactstrap";
import testImg from "../../../styles/assets/img/brooke.png";

class SavedPost extends Component {
  render() {
    return (
      <Card className="lg px-3 my-3 me-3 py-3">
        <div className="mx-3 my-3">
          <CardTitle className="border-bottom">
            <Row>
              <Col className="col-2">
                <CardImg
                  width="100%"
                  src={testImg}
                  alt=""
                  className="border rounded-circle"
                />
              </Col>
              <Col className="col-10 text-start ps-0 ms-0">Brooke</Col>
              <Col className="text-start mx-0">To xxx</Col>
              <Col className="text-end mx-0">date</Col>
            </Row>
          </CardTitle>
          <CardText className="text-start mx-0">something</CardText>
          <CardImg className="mx-3 my-3" src="#" alt="img" width="30%" bottom />
        </div>
      </Card>
    );
  }
}

export default SavedPost;
