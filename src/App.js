import React, {useState} from 'react';
import Title from './components/Title';
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

function App() {

    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <div className="App">
            <Footer />
            <Title/>
            <UploadForm/>
            <ImageGrid setSelectedIma
                       ge={setSelectedImage}/>
            {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
        </div>
    );
}

export default App;
