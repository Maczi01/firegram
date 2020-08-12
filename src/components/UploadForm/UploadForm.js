import React, {useState} from 'react';
import ProgressBar from "../ProgressBar/ProgressBar";

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const changeHandler = (e) => {
        let selectedFile = e.target.files[0]

        const allowedTypes = ['image/png', 'image/jpeg']

        if (selectedFile && allowedTypes.includes(selectedFile.type)) {
            setFile(selectedFile)
            setError('')
        } else {
            setFile(null)
            setError('Select image in png or jpeg format')
        }
    }

    return (
        <form>
            <input type="file" onChange={changeHandler}/>
            <div className="output">
                {error && <div className="error">{error} </div>}
                {file && <div>{file.name} </div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
};

export default UploadForm