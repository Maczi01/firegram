import React, {useState} from 'react';
import useFirestore from "../../hooks/useFirestore";
import {motion} from 'framer-motion'
import styles from './ImageGrid.module.scss'

const ImageGrid = ({setSelectedImage}) => {

    const {docs} = useFirestore('images')
    return (
        <div className={styles.imgGrid}>
            {docs && docs.map(doc => (
                /*<motion.div className="img-wrap"*/
                <motion.div className={styles.imgWrap}
                            layout
                            key={doc.id}
                            whileHover={{opacity: 1}}
                            onClick={() => setSelectedImage(doc.url)}>
                    <motion.img
                        // className={styles.image}
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