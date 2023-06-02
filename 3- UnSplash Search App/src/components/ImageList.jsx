import React from "react";
import ImageShow from "./ImageShow";
import "./styles/ImageList.css"

const ImageList = ({ images }) => {
  return (
    <div className='image-list'>
      {images.map((image) => {
        return <ImageShow key={image.id} image={image} />;
      })}
    </div>
  );
};

export default ImageList;
