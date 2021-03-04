import React, {useState, useEffect}  from 'react'
import { useQuery, gql } from '@apollo/client';
import ColorBox from './ColorBox';


const QUERY = gql`

  query getColorsGray{
    getColorsGray{
      name
      hex
      rgb
    }
  }

`;



const GrayColors = ({handleModal, setHandleModal}) => {
    const { data } = useQuery(QUERY);


    const [colors, setColors] = useState([]);

    useEffect(() => {

        if(data){
          setColors(data.getColorsGray);
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

export default GrayColors
