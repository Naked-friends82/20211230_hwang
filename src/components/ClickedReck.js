import React from 'react';

const ClickedReck = ({savedReck, clicked_ref}) => {

  return(
    <div className="clicked_reck" ref={clicked_ref}>
      {savedReck.map((section,index) => 
          <img 
            key = {index}
            className="clicked_img"
            src={section.src}
            alt="saved Img" />
      )}
    </div>
  )
}

export default ClickedReck