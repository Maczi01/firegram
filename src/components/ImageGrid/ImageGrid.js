import React, {useState} from 'react';
import useFirestore from "../../hooks/useFirestore";
import {motion} from 'framer-motion'
import styles from './ImageGrid.module.scss'

const ImageGrid = ({setSelectedImage}) => {

    const {docs} = useFirestore('images')
    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <motion.div className="img-wrap"
                            layout
                            key={doc.id}
                            whileHover={{opacity: 1}}
                            onClick={() => setSelectedImage(doc.url)}>
                    <motion.img
                        src={doc.url}
                        alt="uploaded pic"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.8}}
                    />
                </motion.div>
            ))}
        </div>
    )
};

export default ImageGrid