import React from "react";
// import 'bulma/css/bulma.css'

const ProfileCard = ({ title, handle, img }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={img} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
