import React from 'react'
import ColorBox from './ColorBox';

const Colors = ({colors, setHandleModal, handleModal}) => {
    console.log(colors);

    return (
        <div>

            <ColorBox
                colors={colors}
                setHandleModal={setHandleModal}
                handleModal={handleModal}
            />
        </div>
    )
}

export default Colors
