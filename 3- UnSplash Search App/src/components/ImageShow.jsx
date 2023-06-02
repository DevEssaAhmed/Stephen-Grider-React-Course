import React from "react";

const ImageShow = ({ image }) => {
  const { urls, alt_description } = image;
  return (
    <div>
      <img src={urls.small} alt={alt_description} />
    </div>
  );
};

export default ImageShow;
