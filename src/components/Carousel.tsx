import React from "react";

const Carousel = (props) => {
  const { title, secTitle, toggleOne, toggleTwo } = props;
  return (
    <div>
      <p>{title}</p>
      <section>
        <button>SHOP ALL</button>
      </section>
      <p>{secTitle}</p>
      <section>
        <button>{toggleOne}</button>
        <button>{toggleTwo}</button>
      </section>
    </div>
  );
};

export default Carousel;
