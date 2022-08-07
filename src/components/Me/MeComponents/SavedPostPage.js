import React, { Component, useState } from "react";
import { Card, CardImg, CardText, CardTitle, Row, Col } from "reactstrap";
import testImg from "../../../styles/assets/img/brooke.png";
import CreateAlbumModal from "./CreateAlbumModal";

const SavedPostPage = () => {
  const savedPostArray = [
    {
      productName: "Apple Watch",
      productID: "prd001",
      category: "Electronics",
      price: 450,
      details: "An Apple Watch that has been used once",
      thumbnail:
        "http://localhost:3000/static/media/appwatch.30e581aa214e694b9a84.jpg",
      files: [],
    },
    {
      productName: "MINI Cooper",
      productID: "prd002",
      category: "Vehicles",
      price: 1000,
      details: "100 miles on it. Needs an oil change",
      thumbnail:
        "http://localhost:3000/static/media/minicooper.a71528b9f42d65af1958.jpeg",

      files: [],
    },
  ];
  const [albums, setAlbums] = useState([]);
  const [showCreateAlbumModal, setShowCreateAlbumModal] = useState(false);

  const newAlbumHandler = (newAlbum) => {
    console.log(newAlbum, "<-- incoming album");
    setAlbums((prevAlbums) => {
      return [...prevAlbums, newAlbum];
    });
    //adds newAlbum to array of albums (albums constant)
  };

  const albumDisplay = (album) => {
    for (let i in album) {
      //console logs each property in album
      console.log(album[i]);
    }
  };

  const albumsToDisplay = albums.map((album) => (
    <div key={album.name}>
      <p
        onClick={() => {
          albumDisplay(album);
        }}
      >
        {album.name}
      </p>
    </div>
  ));

  const marketPlacePostsDisplay = savedPostArray.map((post) => (
    <div key={post.productID}>
      <p style={{ float: "left" }}>{post.productName}</p>
      <img src={post.thumbnail} style={{ width: "20%", float: "left" }} />
      {/*
          Each image should onClick lead to their page or to a page to edit it on
          */}
    </div>
  ));

  return (
    <div>
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
              <button
                onClick={() => {
                  setShowCreateAlbumModal(!showCreateAlbumModal);
                }}
              >
                Create Album
              </button>
              {/*When above button is clicked, this modal is shown */}
              {showCreateAlbumModal && (
                <CreateAlbumModal
                  miscPosts={savedPostArray}
                  //All saved posts are sent over
                  setShowCreateAlbumModal={setShowCreateAlbumModal}
                  newAlbumHandler={newAlbumHandler}
                />
              )}
            </Row>
          </CardTitle>
          <CardText className="text-start mx-0">Click to add to album</CardText>
          {albumsToDisplay}
          {marketPlacePostsDisplay}
          {/* <CardImg className="mx-3 my-3" src="#" alt="img" width="30%" bottom /> 
          Just here for testing CardImg*/}
        </div>
      </Card>
    </div>
  );
};

export default SavedPostPage;
