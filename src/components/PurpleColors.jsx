import React, {useState, useEffect}  from 'react'
import { useQuery, gql } from '@apollo/client';
import ColorBox from './ColorBox';

const QUERY = gql`

  query getColorsPurple{
    getColorsPurple{
      name
      hex
      rgb
    }
  }

`;

const PurpleColors = () => {
    const { data } = useQuery(QUERY);


    const [colors, setColors] = useState([]);

    useEffect(() => {

        if(data){
          setColors(data.getColorsPurple);
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

export default PurpleColors
