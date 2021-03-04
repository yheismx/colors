import React, {useState} from 'react';
import ReactPaginate from "react-paginate";
import InfoBox from "./InfoBox";


const ColorBox = ({colors}) => {

    const [colorInfo, setColorInfo] = useState({
        name : '',
        rgb: [],
        hex: ''
    })

    const [handleModal, setHandleModal] = useState(false);

    const getName = (name, rgb, hex) => {
        setHandleModal(true);
        
        setColorInfo({
            name,
            rgb,
            hex
        })

        console.log(colorInfo);
    }

     
    const [pageNumber, setPageNumber] = useState(0);
    const colorsPerPage = 14;
    const pagesVisited = pageNumber*colorsPerPage;


    const displayColors = colors
        .slice(pagesVisited, pagesVisited + colorsPerPage)
        .map((color) => {
            return(
                <div className="color-card" key={color.name} onClick={()=>getName(color.name, color.rgb, color.hex)}>
                    <div style={{height: '70%', background : color.hex, borderRadius: '10px' }}></div>

                    <div style={{padding:'10px'}}>
                        <p style={{textAlign: 'center'}}>{color.hex}</p>
                    </div>
                </div>
            )
        })

    const pageCount = Math.ceil(colors.length / colorsPerPage);
    const changePage = ({selected}) => {
        setPageNumber(selected);
    };

    return (
        <>
        <h2>Colors found {colors.length}</h2>
        <div className="color-container">
            
         

            {displayColors}
            
            {
                
                colors.length > 1 ? 
                <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationButtons"}
                previousLinkClassName={"previousButton"}
                nextLinkClassName={"nextButton"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
                />
                :
                null
            }

            


            {
                handleModal ? 
                <InfoBox
                    colorInfo={colorInfo}
                    setHandleModal={setHandleModal}
                /> : null
            }
        </div>

       
        </>
    )
}

export default ColorBox
