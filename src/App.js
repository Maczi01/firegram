import React, {useState} from 'react';
import Title from './components/Title';
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";

function App() {
    
    const [selectedImage, setSelectedImage] = useState()
    
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImage={setSelectedImage}/>
      <Modal selectedImage={selectedImage}/>
    </div>
  );
}

export default App;
