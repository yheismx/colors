import React from 'react';



const InfoBox = ({colorInfo, setHandleModal}) => {  

const cerrar = () => {
    setHandleModal(false);
}

  return (
    <div className="modal">
        <div className="modal-color" style={{background:colorInfo.hex}}>

        </div>
        <div className="modal-info-container">
            <div className="modal-info">
                <p>Name: {colorInfo.name}</p>
                <p>Hex: {colorInfo.hex}</p>
                <p>RGB: {colorInfo.rgb[0]}, {colorInfo.rgb[1]}, {colorInfo.rgb[2]}</p>
                
            </div>

            <div>
                <button className="button-modal" onClick={cerrar}>Close</button>         
            </div>
        </div>
        
    </div>
  );
}


export default InfoBox