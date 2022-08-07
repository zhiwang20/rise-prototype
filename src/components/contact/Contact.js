import { Link, Routes, Route, Outlet, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import SendMessageForm from "./sendMessageForm";

import {
  faSliders,
  faPlus,
  faPlusSquare,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import StartChat from "./StartChat";
import MessageList from "./MessageList/MessageList";
import ContactsList from "./ContactsList";
import {
  Row,
  Col,
  Container,
  Button,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Input,
} from "reactstrap";
import "./Contact.css";
import { useState, useEffect, useRef } from "react";

//to be replaced by the actual friend data using database
const DUMMY_FRIEND_DATA = [
  {
    userName: "Brooke Weaver",
    userId: "x001",
  },
  {
    userName: "Han Noguchi",
    userId: "x002",
  },
  {
    userName: "Jessie Lake",
    userId: "x003",
  },
  {
    userName: "James Smith",
    userId: "x004",
  },
  {
    userName: "Doug Hern",
    userId: "x005",
  },
  {
    userName: "Austin Matthews",
    userId: "x006",
  },
];

const Contact = () => {
  const [modalAddContact, setModalAddContact] = useState(false);
  const toggleModalAddContact = () => setModalAddContact(!modalAddContact);
  const [modalAddGroup, setModalAddGroup] = useState(false);
  const toggleModalAddGroup = () => setModalAddGroup(!modalAddGroup);

  const [addUsersToGroup, setAddUsersToGroup] = useState(false);

  const [, updateState] = useState();
  //causes re-render

  const [query, setQuery] = useState("");

  const [groupName, setGroupName] = useState(null);

  const groupNameVerifier = (event) => {
    if (event.target.value.trim().length > 0) {
      setAddUsersToGroup(true);
      setGroupName(event.target.value);
    } else {
      setAddUsersToGroup(false);
    }
  };

  const [friendArray, setFriendArray] = useState(
    DUMMY_FRIEND_DATA.map((friend) => {
      return { ...friend, isChosen: false };
    })
  );
  //adds isChosen attribute, and sets as false on default

  const friendSearch = (event) => {
    setQuery(event.target.value);
  };

  const clickHandler = (e) => {
    let tempArray = friendArray;
    for (let c in tempArray) {
      if (tempArray[c].userId == e.target.id) {
        tempArray[c].isChosen = !tempArray[c].isChosen;
      }
    }
    //clicked JSX item's id must be the corresponding userId in the array
    setFriendArray(tempArray);
  };

  useEffect(() => {
    setFriendArray(
      DUMMY_FRIEND_DATA.map((friend) => {
        return { ...friend, isChosen: false };
      })
    );
    setQuery("");
    setAddUsersToGroup(false);
  }, [modalAddGroup]);
  //resets whenever the modal is opened or closed

  const options = friendArray.map((user) => (
    <ul>
      <li
        onClick={(e) => {
          updateState({});
          //causes re-render

          clickHandler(e);
        }}
        id={user.userId}
        style={{
          backgroundColor: user.isChosen ? "red" : "green",
          //is meant to visually show user that a selection has occured
          visibility: user.userName.toUpperCase().includes(query.toUpperCase())
            ? ""
            : "hidden",
        }}
      >
        {user.userName}
      </li>
    </ul>
  ));

  const submitHandler = () => {
    var toBeAddedFriends = [];

    for (let i in friendArray) {
      if (friendArray[i].isChosen) {
        delete friendArray[i].isChosen;
        //no need to store the isChosen attribute anymore
        toBeAddedFriends.push(friendArray[i]);
      }
    }
    console.log(toBeAddedFriends, "to be added");

    console.log(groupName, "is the group name");
    toggleModalAddGroup();
  };

  //Add Contact code begins here
  const searchedUserRef = useRef();
  const [addContactSubmitMessage, setAddContactSubmitMessage] = useState("");

  const searchUserHandler = () => {
    const searchedUser = searchedUserRef.current.value;
    console.log(searchedUserRef.current.value);

    if (searchedUser.trim().length === 0) {
      //alert("Please enter a name");
      setAddContactSubmitMessage(
        <p style={{ color: "red" }}>Please enter a name</p>
      );
    }
    if (
      friendArray.findIndex((friend) => friend.userName == searchedUser) !== -1
      //if it is -1, then it means not found
      //looks through friendArray for friend with username that is the same as searchedUser
    ) {
      setAddContactSubmitMessage(
        <p style={{ color: "green" }}>This user is already your friend</p>
      );
    } else {
      /*else if (!(searchedUser in sovPrimeUserData)) {
      setAddContactSubmitMessage(
        <p style={{ color: "red" }}>Sorry we couldn't find that user</p>
      );
    }
    To be added when a user database has been set up
    */
      setAddContactSubmitMessage(
        <p style={{ color: "green" }}>Successfully sent friend request</p>
      );
    }
    searchedUserRef.current.value = "";
  };

  return (
    <div>
      <Button
        color="transparent"
        onClick={() => setModalAddContact(!modalAddContact)}
      >
        <FontAwesomeIcon className="iconN" icon={faPlus} />
      </Button>
      <Button
        color="transparent"
        onClick={() => setModalAddGroup(!modalAddGroup)}
      >
        <FontAwesomeIcon className="iconN" icon={faPlusSquare} />
      </Button>
      <Modal
        className="Modal"
        isOpen={modalAddContact}
        toggle={toggleModalAddContact}
      >
        <ModalHeader isOpen={modalAddContact} toggle={toggleModalAddContact}>
          Add New Contact
        </ModalHeader>
        <ModalBody>
          <div className="d-flex">
            <input
              id="searchUserInput"
              name="searchUserInput"
              ref={searchedUserRef}
              type="text"
              placeholder="Search user"
              className="searchUserInput"
            ></input>
            <Button
              className="btn-search"
              color="transparent"
              onClick={searchUserHandler}
            >
              <FontAwesomeIcon className="iconN" icon={faMagnifyingGlass} />
            </Button>
            {addContactSubmitMessage}
          </div>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
      <Modal
        className="Modal"
        isOpen={modalAddGroup}
        toggle={toggleModalAddGroup}
      >
        <ModalHeader isOpen={modalAddGroup} toggle={toggleModalAddGroup}>
          Add New Group
        </ModalHeader>
        <ModalBody>
          <div className="d-flex">
            <Input
              id="addGroupInput"
              name="addGroupInput"
              //onChange={function noRefCheck() { }}
              type="text"
              placeholder="Group name"
              className="addGroupInput"
              onChange={groupNameVerifier}
            ></Input>

            {addUsersToGroup && (
              <span>
                <Input
                  id="searchUserInput"
                  name="searchUserInput"
                  onChange={friendSearch}
                  type="text"
                  placeholder="Search user"
                  className="searchUserInput"
                ></Input>
                <Button className="btn-search" color="transparent">
                  <FontAwesomeIcon className="iconN" icon={faMagnifyingGlass} />
                </Button>
              </span>
            )}
            {addUsersToGroup && options}
          </div>
        </ModalBody>
        <ModalFooter>
          {addUsersToGroup && (
            <Button
              color="transparent"
              className="btn-add"
              onClick={submitHandler}
            >
              <strong>Add</strong>
            </Button>
          )}
        </ModalFooter>
      </Modal>
      <Container>
        <Row>
          <Col md={6}>
            <div className="icons">
              <Button
                color="transparent"
                onClick={() => setModalAddContact(!modalAddContact)}
              >
                <FontAwesomeIcon className="iconN" icon={faPlus} />
              </Button>
              <Button
                color="transparent"
                onClick={() => setModalAddGroup(!modalAddGroup)}
              >
                <FontAwesomeIcon className="iconN" icon={faPlusSquare} />
              </Button>
            </div>
            <Link className="link-dark" to="MessageList/">
              <ContactsList />
            </Link>
          </Col>
          <Col md={6}>
            <Routes>
              <Route exact path="/" element={<StartChat />} />
              <Route exact path="MessageList/*" element={<MessageList />} />
            </Routes>
          </Col>
        </Row>
        <Row>
          <SendMessageForm />
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
