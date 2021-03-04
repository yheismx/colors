import React, {useState, useEffect}  from 'react'
import { useQuery, gql } from '@apollo/client';
import ColorBox from './ColorBox';

const QUERY = gql`

  query getColorsYellow{
    getColorsYellow{
      name
      hex
      rgb
    }
  }

`;


const YellowColors = ({setHandleModal, handleModal}) => {
    const { data } = useQuery(QUERY);


    const [colors, setColors] = useState([]);

    useEffect(() => {

        if(data){
          setColors(data.getColorsYellow);
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

export default YellowColors
