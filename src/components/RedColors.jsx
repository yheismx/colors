import React, {useState, useEffect}  from 'react'
import { useQuery, gql } from '@apollo/client';
import ColorBox from './ColorBox';



const QUERY = gql`

  query getColorsRed{
    getColorsRed{
      name
      hex
      rgb
    }
  }

`;


const RedColors = () => {
    const { data } = useQuery(QUERY);


    const [colors, setColors] = useState([]);

    useEffect(() => {

        if(data){
          setColors(data.getColorsRed);
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

export default RedColors
