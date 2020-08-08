import React, {useState} from 'react';
import useFirestore from "../hooks/useFirestore";
import {motion} from 'framer-motion'

const ImageGrid = ({setSelectedImage}) => {

    const {docs} = useFirestore('images')
    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <motion.div className="img-wrap"
                     key={doc.id}
                     onClick={() => setSelectedImage(doc.url)}>
                    <img src={doc.url} alt="uploaded pic"/>
                </motion.div>
            ))}
        </div>
    )
};

export default ImageGrid