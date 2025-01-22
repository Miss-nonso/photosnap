import React from "react";

const ImgContainer = ({ img }) => {
  // return <div className={` ${imgClassname} grid-img`}></div>;
  return (
    <div className="grid-img">
      <img src={img} alt="portray" />
    </div>
  );
};

export default ImgContainer;
