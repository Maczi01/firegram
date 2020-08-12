import React, {useState} from 'react';
import Title from './components/Title/Title';
import UploadForm from "./components/UploadForm/UploadForm";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import Modal from "./components/Modal/Modal";
import Header from "./components/Header/Header";

function App() {

    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <div className="App">
            <Header />
            <Title/>
            <UploadForm/>
            <ImageGrid setSelectedIma
                       ge={setSelectedImage}/>
            {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
        </div>
    );
}

export default App;
