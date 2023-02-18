import React from "react";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/bs";

function Awards() {
  return (
    <div className="awards">
      <div className="award">
        <h2>AWARDS</h2>
        <div className="award_card">
          <div className="award_img">
            <div className="award_image"></div>
          </div>

          <h4>Award Name</h4>
          <div className="footer">
            <h4>&lt; Back</h4>

            <div className="btn_round">
              <BsFillCircleFill className="round_btn blue" />
              <BsFillCircleFill className="round_btn" />
              <BsFillCircleFill className="round_btn" />
              <BsFillCircleFill className="round_btn" />
              <BsFillCircleFill className="round_btn" />
            </div>

            <h4>Next &gt;</h4>
          </div>
        </div>
      </div>
      <div className="award">
        <h2>CERTIFICATION</h2>
        <div className="award_card">
          <div className="award_img">
            <div className="award_image certificate"></div>
          </div>

          <h4>Certificate Name</h4>
          <div className="footer">
            <h4>&lt; Back</h4>

            <div className="btn_round">
              <BsFillCircleFill className="round_btn blue" />
              <BsFillCircleFill className="round_btn" />
              <BsFillCircleFill className="round_btn" />
              <BsFillCircleFill className="round_btn" />
              <BsFillCircleFill className="round_btn" />
            </div>

            <h4>Next &gt;</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
