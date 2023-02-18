import React from "react";
import { GiGears } from "react-icons/gi";
import { FaGreaterThan } from "react-icons/fa";

function Offerings() {
  return (
    <div className="offerings">
      <h3>Business Offerings</h3>
      <div className="offering">
        <div className="offer">
          <div className="offer_title">
            <GiGears className="gear" />
            <h3>installation and assembly work</h3>
          </div>
          <div className="underline"></div>
          <div className="image_details">
            <div className="img1"></div>
            <div className="details_offer">
              <div className="arrow_detail">
                <FaGreaterThan className="gt" />
                <p>
                  Composite strengthening system using carbon fireas well as
                  glass fire
                </p>
              </div>
              <div className="arrow_detail">
                <FaGreaterThan className="gt" />
                <p>
                  Composite strengthening system using carbon fireas well as
                  glass fire
                </p>
              </div>
              <div className="arrow_detail">
                <FaGreaterThan className="gt" />
                <p>
                  Composite strengthening system using carbon fireas well as
                  glass fire
                </p>
              </div>
            </div>
          </div>
          <p className="offer_text1">
            Welding Consumables: Welding Rods, CO2 Wires, Flux Core Wires,
            Tungsten Rods, Brass Brazing Rods, Additionally we have supply
            Accessories for Welding: Hand Screens, Head Screens, Auto Darkening
            Helmet, Aprons, Leather Gloves, Black & White googles, Leg guards,
            Hand guards, Cutting Nozzles, Co2 Tips, Co2 Nozzles, Co2 Regulators,
            Oxygen Regulators, Argon Regulators, Co2 Torch, Gas pipes, Plasma
            torch
          </p>
        </div>

        <div className="offer">
          <div className="offer_title">
            <GiGears className="gear" />
            <h3>installation and assembly work</h3>
          </div>
          <div className="underline"></div>
          <div className="image_details">
            <div className="img2"></div>
            <div className="details_offer">
              <div className="arrow_detail">
                <FaGreaterThan className="gt" />
                <p>
                  Composite strengthening system using carbon fireas well as
                  glass fire
                </p>
              </div>
              <div className="arrow_detail">
                <FaGreaterThan className="gt" />
                <p>
                  Composite strengthening system using carbon fireas well as
                  glass fire
                </p>
              </div>
            </div>
          </div>
          <p className="offer_text1">
            A4 paper rims, punching machines, box files, staplers, sticky notes,
            flat files, Spring files, Card holders, L- shape folders, Carbon
            papers, Registers, Inks, Note books, Dusters, Handbooks, Pens,
            Notepads, Pencils, Packing tapes, Sharpers, Calculators, Erasers,
            Rulers, Markers, Cable ties, Envelopes
          </p>
        </div>

        <div className="offer">
          <div className="offer_title">
            <GiGears className="gear" />
            <h3>installation and assembly work</h3>
          </div>
          <div className="underline"></div>
          <div className="image_details">
            <div className="img3"></div>
            <div className="details_offer">
              <div className="arrow_detail">
                <FaGreaterThan className="gt" />
                <p>
                  Composite strengthening system using carbon fireas well as
                  glass fire
                </p>
              </div>
            </div>
          </div>
          <p className="offer_text1">
            Safety shoes, Helmets, Jackets, Gum boots, Safety belts, goggles,
            Hearing Protection, Masks, Face shields, Gloves, Safety nets, Cones/
            Chains, Speed Breakers, Barrication Tapes, Reflective Taps, Spring
            Posts, Batten lights, Fire ABC, Hand guards, Leg guards, Fire
            Blankets
          </p>
        </div>
      </div>
    </div>
  );
}

export default Offerings;
