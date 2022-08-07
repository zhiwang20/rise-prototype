import React, { Component } from "react";
import { Card, CardImg, CardText, CardTitle, Row, Col } from "reactstrap";
import img1 from '../../../styles/assets/img/jessie.png';
import prod1 from '../../../styles/assets/appwatch.jpg';
import prod2 from '../../../styles/assets/minicooper.jpeg';
import prod3 from '../../../styles/assets/ps5.jpeg';

const data = [
    {
        Id: 1,
        perName: "Eric Smith",
        perPic: img1,
        prodName: "Apple Watch",
        Category: "electronics",
        Price: 450,
        Detail: "This is a brand new apple Watch. I used it onece, but then found I do not  need it. I is in very good condition",
        prodPic: prod1,
        Good: 14,
        Bad: 2,
        Date: "2022-05-25"
    },
    {
        Id: 2,
        perName: "Stan Smith",
        perPic: img1,
        prodName: "MINI cooper",
        Category: "vehicles",
        Price: 1000,
        Detail: "This is a car",
        prodPic: prod2,
        Good: 14,
        Bad: 2,
        Date: "2022-05-22"
    },
    {
        id: 3,
        perName: "Eric Smith",
        perPic: img1,
        prodName: "PS5",
        Category: "entertainment",
        Price: 200,
        Detail: "This is a PS station. It is a new good",
        prodPic: prod3,
        Good: 14,
        Bad: 2,
        Date: "2021-05-27"
    },
];

//should be retrieved by log in page
const meName = "Eric Smith";
class MarketPlace extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data
        }
    }

    render() {
        return (
            <>
                {this.state.data
                    .filter(person => person.perName === meName)
                    .map((item) => {
                        return (
                            <Card className="lg mx-3 my-3" key={item.Id}>
                                <div className="mx-3 my-3">
                                    <CardTitle className="border-bottom">
                                        <Row>
                                            <Col className="text-start mx-3" style={{ fontWeight: "bold", fontSize: 20 }}>{item.prodName}</Col>
                                            <Col className="text-end mx-3" style={{ fontSize: 20 }}>${item.Price}</Col>
                                        </Row>
                                    </CardTitle>
                                    <CardText className="text-start mx-3" style={{ fontSize: 18 }}>
                                        {item.Detail}
                                    </CardText>
                                    <Row xs="2" >
                                        <Col className="mx-1 text-start mx-3" >
                                            <CardImg
                                                style={{ width: "80%" }}
                                                className="border"
                                                src={item.prodPic}
                                                alt="img"
                                            />
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                        )
                    })
                }
            </>

        )
    }
}

export default MarketPlace;