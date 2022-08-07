import { click } from "@testing-library/user-event/dist/click";
import React, { useState, useRef } from "react";

const CreateAlbumModal = (props) => {
  const [albumName, setAlbumName] = useState("");

  const [showMiscPosts, setShowMiscPosts] = useState(false);
  const albumNameInputRef = useRef();

  const [, updateState] = useState();

  const [selectedArray, setSelectedArray] = useState(
    props.miscPosts.map((post) => {
      return { ...post, isChosen: false };
    })
  );

  const submitHandler = (event) => {
    event.preventDefault();
    if (albumNameInputRef.current.value.trim().length > 0) {
      setAlbumName(albumNameInputRef.current.value);

      setShowMiscPosts(true);
    }
  };

  const clickHandler = (key) => {
    let tempArray = selectedArray;
    for (let c in tempArray) {
      if (tempArray[c].productID == key) {
        //finds appropriate product
        tempArray[c].isChosen = !tempArray[c].isChosen;
        //switches isChosen, so a double click goes unchosen ==> chosen ==> unchosen
      }
    }
    setSelectedArray(tempArray);
  };

  const albumSubmissionHandler = () => {
    let tempArray = [];
    for (let c in selectedArray) {
      if (selectedArray[c].isChosen) {
        console.log(selectedArray[c], "chosen");
        delete selectedArray[c].isChosen;
        //No need to keep the isChosen attribute in the object, so it is removed
        tempArray.push(selectedArray[c]);
        //any saved posts with isChosen == true are added to the array of saved posts
      }
    }
    let tempObjArray = {
      name: albumName,
      savedPosts: tempArray,
    };

    props.setShowCreateAlbumModal(false);
    //stops showing this program
    props.newAlbumHandler(tempObjArray);
    //sends tempObjArray to be added to array of albums
  };

  const miscPostsDisplay = selectedArray.map((post) => (
    <div
      key={post.productID}
      onClick={() => {
        updateState({});
        clickHandler(post.productID);
      }}
      style={{
        color: post.isChosen ? "red" : "green",
      }}
    >
      <p style={{ float: "left" }}>{post.productName}</p>
      <img src={post.thumbnail} style={{ width: "20%", float: "left" }} />
      {/*
          Each image should onClick lead to their page or to a page to edit it on
          This feature is not yet added, and will require an API for it to work well I think.
          */}
    </div>
  ));

  return (
    <div>
      {!showMiscPosts && (
        <form onSubmit={submitHandler}>
          <label>Album Name:</label>
          <input type="text" ref={albumNameInputRef} />
          <button>Next</button>
        </form>
      )}
      {showMiscPosts && (
        <div>
          <h2>{albumName}</h2>
          <p>Choose posts to add</p>
          {miscPostsDisplay}
          <button onClick={albumSubmissionHandler}>Done</button>
        </div>
      )}
    </div>
  );
};

export default CreateAlbumModal;
