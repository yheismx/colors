import React, {useState, useEffect}  from 'react'
import { useQuery, gql } from '@apollo/client';
import ColorBox from './ColorBox';

const QUERY = gql`

  query getColorsOrange{
    getColorsOrange{
      name
      hex
      rgb
    }
  }

`;


const OrangeColors = ({setHandleModal, handleModal}) => {
    const { data } = useQuery(QUERY);


    const [colors, setColors] = useState([]);

    useEffect(() => {

        if(data){
          setColors(data.getColorsOrange);
        }
        
    
    }, [data])
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

export default OrangeColors
