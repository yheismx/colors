import React, {useState, useEffect} from 'react'
import { useQuery, gql } from '@apollo/client';
import ColorBox from './ColorBox';

const QUERY = gql`
  query getFilteredColors($input: ColorInput) {
    getFilteredColors(input:$input) {
        name
        hex
        rgb
    }
  }
`;


const FilteredColors = ({searchValue}) => {
    const { data } = useQuery(QUERY, {
        variables: { 
            input:{
                "colorName" : searchValue
            }
        },
      });


    const [colors, setColors] = useState([]);

    useEffect(() => {

        if(data){
        setColors(data.getFilteredColors);
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

export default FilteredColors
