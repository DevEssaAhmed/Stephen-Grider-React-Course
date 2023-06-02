import { useState } from "react";

import searchImages from "./api";

import "./App.css";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

function App() {
  const[images, setImages] = useState([]);

  const handleSumbit = async (term) => {
    const result = await searchImages(term);
    console.log(result)
    setImages(result);
  };
  return (
    <div className='app'>
      <SearchBar onSubmit={handleSumbit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
