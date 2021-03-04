import React from 'react'
import ColorBox from './ColorBox';

const Colors = ({colors}) => {
    console.log(colors);

    return (
        <div>

            <ColorBox
                colors={colors}
            />
        </div>
    )
}

export default Colors
