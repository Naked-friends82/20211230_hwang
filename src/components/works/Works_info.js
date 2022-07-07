import React from 'react';

const Works_info = ({info}) => {

  return(
    <>
      <div className="works_info">
        <div className="title">
          <div className="title_title">{info.title}</div>
          <span className="title_detail">{info.date}</span> <br />
          <span className="title_detail">{info.place}</span> <br />
          <span className="title_detail">{info.donat}</span> <br />
        </div>
        <div className="contact">
          skekdmask@naver.com <br />
          <a href="https://www.instagram.com/kyuminq/"> @kyuminq <br /></a>
          © 2021. kyumin Hwang. All Rights Reserved.
        </div>
      </div>
    </>
  )
}

export default Works_info