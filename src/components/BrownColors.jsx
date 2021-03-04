import React, {useState, useEffect}  from 'react'
import { useQuery, gql } from '@apollo/client';
import ColorBox from './ColorBox';



const QUERY = gql`

  query getColorsBrown{
    getColorsBrown{
      name
      hex
      rgb
    }
  }

`;

const BrownColors = () => {
    const { data } = useQuery(QUERY);


    const [colors, setColors] = useState([]);

    useEffect(() => {

        if(data){
          setColors(data.getColorsBrown);
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

export default BrownColors
