import React from "react";
/*  import React, { useState } from "react"; */

const Footer = () => {
  /*Funzione per conteggo 
  const [count, setCount] = useState(0); */

  return (
    <div>
      <div className="footercontainer">
        <div className="footerlayout">
          <div className="footertShipmentcontainer">
            <div className="secure-packaging-icon"></div>
            <div className="footertext">Conegna attenta nel packaging</div>
          </div>
        </div>

        <div className="footerlayout">
          <div className="footertAssistancetcontainer">
            <div className="custom-suggest-icon"></div>
            <div className="footertext">Consigli personalizzati</div>

            <div className="assistancenumber"> 800 571 984</div>
          </div>
        </div>

        <div className="footerlayout">
          <div className="footerPaymentcontainer">
            <div className="payment-icon"></div>
            <div className="footertext">Pagamento sicuro</div>
          </div>
        </div>

        <div className="footerlayout">
          <div className="footerGuaranteeProductcontainer">
            <div className="guaranteeOrigin-icon"></div>
            <div className="footertext">Provenienza garantita</div>
          </div>
        </div>
        <div className="footerlayout">
          <div className="footertInformationcontainer">
            <div className="footerCountry-icon"></div>
            <div className="footerinformation">
              <div className="footertext">Pensa tipico</div>
              <div className="footertext">Chi siamo?</div>

              <div className="footertext">Lavora con noi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
