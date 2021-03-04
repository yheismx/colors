import React, {useState, useEffect}  from 'react'
import { useQuery, gql } from '@apollo/client';
import ColorBox from './ColorBox';

const QUERY = gql`

  query getColorsGreen{
    getColorsGreen{
      name
      hex
      rgb
    }
  }

`;


const GreenColors = () => {
    const { data } = useQuery(QUERY);


    const [colors, setColors] = useState([]);

    useEffect(() => {

        if(data){
          setColors(data.getColorsGreen);
        }
        
    
    }, [data])
    return (
        <div>
            <ColorBox
                colors={colors}
            />
        </div>
    )
}

export default GreenColors
