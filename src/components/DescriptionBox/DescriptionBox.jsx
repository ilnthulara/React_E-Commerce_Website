import React from "react";
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          eveniet illum veritatis cumque iste maiores fugiat iure minima sequi
          in officiis voluptates nulla pariatur, voluptatibus reprehenderit
          facere, eius praesentium architecto quidem nostrum. Nulla excepturi
          quis delectus, perspiciatis autem molestiae dolorum!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          nihil quasi esse ut animi tempore, laborum aperiam ex cum
          necessitatibus enim quod adipisci voluptate labore amet doloribus.
          Quia officiis, repellendus quaerat corrupti inventore molestias nam
          provident iure unde dolores! Maiores, totam temporibus. Nam, totam
          doloribus.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
