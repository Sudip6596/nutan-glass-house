import React from "react";
import { GrLocation } from "react-icons/gr";
import { BsFillCircleFill } from "react-icons/bs";

function HallOfFame() {
  return (
    <div className="hof">
      <h3>HALL OF FAME</h3>
      <div className="hof_container">
        <div className="fame">
          <div className="fame_img1"></div>
          <h3>Project Name</h3>
          <h4>Client Name</h4>
          <div className="location">
            <GrLocation />
            <p>Kharadi Pune</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec.
          </p>
        </div>
        <div className="fame">
          <div className="fame_img2"></div>
          <h3>Project Name</h3>
          <h4>Client Name</h4>
          <div className="location">
            <GrLocation />
            <p>Kharadi Pune</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec.
          </p>
        </div>
        <div className="fame">
          <div className="fame_img3"></div>
          <h3>Project Name</h3>
          <h4>Client Name</h4>
          <div className="location">
            <GrLocation />
            <p>Kharadi Pune</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec.
          </p>
        </div>
      </div>
      <div className="round_btns">
        <BsFillCircleFill className="round_btn blue" />
        <BsFillCircleFill className="round_btn" />
        <BsFillCircleFill className="round_btn" />
        <BsFillCircleFill className="round_btn" />
        <BsFillCircleFill className="round_btn" />
      </div>
    </div>
  );
}

export default HallOfFame;
