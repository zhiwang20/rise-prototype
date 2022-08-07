import React, { useState } from "react";
import EditProfile from "./EditProfile";

const MeMain = () => {
  //user data should be a user's personal information and the user's marketplace posts
  const [DUMMY_USER_DATA, setDUMMY_USER_DATA] = useState({
    firstName: "Jane",
    lastName: "Doe",
    age: 24,
    height: 160,
    address: "Wellington St, Ottawa, ON K1A 0A9",
    occupation: "Sound Technician",
    sex: "Female",
    bio: "I work at the parliament building.",
    selfie: (
      <img src="http://localhost:3000/static/media/brooke.81587ebc7f34e3b6c003.png" />
    ),
    marketPlacePosts: [
      {
        productName: "Apple Watch",
        category: "Electronics",
        price: 450,
        details: "An Apple Watch that has been used once",
        thumbnail:
          "http://localhost:3000/static/media/appwatch.30e581aa214e694b9a84.jpg",
        files: [],
      },
      {
        productName: "MINI Cooper",
        category: "Vehicles",
        price: 1000,
        details: "100 miles on it. Needs an oil change",
        thumbnail:
          "http://localhost:3000/static/media/minicooper.a71528b9f42d65af1958.jpeg",

        files: [],
      },
    ],
    nirvanaAmount: 500,
  });
  const marketPlacePostsDisplay = DUMMY_USER_DATA.marketPlacePosts.map(
    (post) => (
      <div key={post.details}>
        <p style={{ float: "left" }}>{post.productName}</p>
        <img src={post.thumbnail} style={{ width: "20%", float: "left" }} />
        {/*
        Each image should onClick lead to their page or to a page to edit it on
        */}
      </div>
    )
  );
  const [showEditProfile, setShowEditProfile] = useState(false);

  const handleModalToggle = () => {
    setShowEditProfile(!showEditProfile);
    //call this in EditProfile without parameters to close modal
  };

  const editProfile = (newAddress, newOccupation, newBio, newSelfie) => {
    console.log(newAddress);
    console.log(newOccupation);
    console.log(newBio);
    var tempProfile = DUMMY_USER_DATA;
    tempProfile.address = newAddress;
    tempProfile.occupation = newOccupation;
    tempProfile.bio = newBio;
    if (newSelfie !== null) {
      tempProfile.selfie = (
        <img
          src={newSelfie}
          //style={{ borderRadius: "50%", clipPath: "circle()" }}
          //makes the new selfie shown as a circle, like many social medias' thumbnails for profile pictures
        />
      );
    }
    setDUMMY_USER_DATA(tempProfile);
  };

  return (
    <div>
      {DUMMY_USER_DATA.selfie}
      <span>
        {DUMMY_USER_DATA.firstName} {DUMMY_USER_DATA.lastName}{" "}
        <button onClick={handleModalToggle}>Edit Profile</button>
        {/*Above onClick makes the EditProfile.js program visible */}
        <br></br>
        <b>{DUMMY_USER_DATA.nirvanaAmount}</b> nirvana
      </span>

      <h4>Your Market Place Items</h4>
      {marketPlacePostsDisplay}
      <button>Manage Market Place Items</button>
      {/* not yet implemented */}
      {showEditProfile && (
        <EditProfile
          handleModalToggle={handleModalToggle}
          currentAddress={DUMMY_USER_DATA.address}
          currentOccupation={DUMMY_USER_DATA.occupation}
          currentBio={DUMMY_USER_DATA.bio}
          editProfile={editProfile}
        />
      )}
    </div>
  );
};

export default MeMain;
