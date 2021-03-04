import React from 'react'
import ColorBox from './ColorBox';

const RandomColors = ({randomColor, setHandleModal, handleModal}) => {

    
    




    return (
        <div>       
            <ColorBox
                colors={randomColor}
                setHandleModal={setHandleModal}
                handleModal={handleModal}
            />
        </div>
    )
}

export default RandomColors
