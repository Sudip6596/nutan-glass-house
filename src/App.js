import Header from "./Components/Header";
import Offerings from "./Components/Offerings";
import HallOfFame from "./Components/HallOfFame";
import Clients from "./Components/Clients";
import Awards from "./Components/Awards";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { TbReceiptTax } from "react-icons/tb";
import { AiFillTrademarkCircle } from "react-icons/ai";
import { TbCertificate } from "react-icons/tb";
import { SlGlobe } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="random_text">
        <h3>
          Success is not final; failure is not fatal: it is the courage to
          continue that counts.
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
          augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
          rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
          semper libero, sit amet adipiscing sem neque sed ipsum
        </p>
      </div>
      <div className="company_details">
        <div className="icon_text">
          <div className="detail">
            <TbBuildingSkyscraper className="detail_icn" />
            <p>Establishment in 1991</p>
          </div>
          <div className="detail">
            <TbReceiptTax className="detail_icn" />
            <p>GST Number: 07AAGFF2194N1Z1 / Not Avaliable</p>
          </div>
          <div className="detail">
            <AiFillTrademarkCircle className="detail_icn" />
            <p>Proprietory</p>
          </div>
          <div className="detail">
            <TbCertificate className="detail_icn" />
            <p>
              ISO Certification : None / ISO 9001:2008,ISO 9001:2015,ISO
              14001:2015,ISO 45001:2018,ISO 27001:2013,ISO 50001:2008,ISO
              26000:2010,ISO 31000:2018
            </p>
          </div>
        </div>
        <div className="icon_text">
          <div className="detail">
            <SlGlobe className="detail_icn" />
            <p>www.neevay.com</p>
          </div>
          <div className="detail">
            <GrMail className="detail_icn" />
            <p>ngh.praveen@gmail.com</p>
          </div>
          <div className="detail">
            <FaUser className="detail_icn" />
            <p>+91XXXXXXXX</p>
          </div>
          <div className="detail">
            <MdLocationPin className="detail_icn" />
            <p>
              HEAD OFFICE123, Demo Office,Demo Tech Park,Near Demo Hotel, Pune,
              Pune,Maharashtra, India, 411014,
            </p>
          </div>
        </div>
      </div>
      <Offerings />
      <HallOfFame />
      <Clients />
      <Awards />
    </div>
  );
}

export default App;
