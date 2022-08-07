import React from "react";
import img1 from '../../styles/assets/img/brooke.png';
import img2 from '../../styles/assets/img/han.png';
import img3 from '../../styles/assets/img/jessie.png';
import { UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const FRIENDS = [
    {
        img: img1,
        name: 'Brooke Weaver',
    },
    {
        img: img2,
        name: 'Han Noguchi',
    },
    {
        img: img3,
        name: 'Jessie Lake',
    },
]
class ContactsList extends React.Component {
    render() {
        return (
            <>
                <UncontrolledAccordion defaultOpen="0">
                    <AccordionItem>
                        <AccordionHeader targetId="1">
                            Friends
                        </AccordionHeader>
                        <AccordionBody accordionId="1">
                            <div className="contacts-list">
                                {FRIENDS.map((contact, index) => {
                                    return (
                                        <div className="contact">
                                            <div className="contact-image">
                                                <img src={contact.img} />
                                            </div>
                                            <div className="contact-name">
                                                {contact.name}
                                            </div>
                                        </div>
                                    )
                                }
                                )}
                            </div>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="2">
                            Family
                        </AccordionHeader>
                        <AccordionBody accordionId="2">
                            <div className="contacts-list">
                                {FRIENDS.map((contact, index) => {
                                    return (
                                        <div className="contact">
                                            <div className="contact-image">
                                                <img src={contact.img} />
                                            </div>
                                            <div className="contact-name">
                                                {contact.name}
                                            </div>
                                        </div>
                                    )
                                }
                                )}
                            </div>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="3">
                            Work
                        </AccordionHeader>
                        <AccordionBody accordionId="3">
                            <div className="contacts-list">
                                {FRIENDS.map((contact, index) => {
                                    return (
                                        <div className="contact">
                                            <div className="contact-image">
                                                <img src={contact.img} />
                                            </div>
                                            <div className="contact-name">
                                                {contact.name}
                                            </div>
                                        </div>
                                    )
                                }
                                )}
                            </div>
                        </AccordionBody>
                    </AccordionItem>
                </UncontrolledAccordion>
            </>
        )
    }
}

export default ContactsList;