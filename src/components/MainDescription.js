import React from "react";

const MainDescription = () => {
  return (
    <div className="row">
      <div className="col-2 col-sm-4 col-md-2 mini-box">
        <div className="seadas-picture"></div>
        <div className="title-seadas">Seadas</div>
      </div>
      <div className="col-2 col-sm-4 col-md-2 mini-box">
        <div className="prosciutto-sandan-picture"></div>
        <div className="title-sandan">Prosciutto San Daniele</div>
      </div>

      <div className="col-3 col-sm-4 col-md-2 secondDescription">Alla ricerca dei prodotti delle nostre terre</div>
      <div className="col-2 col-sm-4 col-md-2 mini-box">
        <div className="granapadano-picture"></div>
        <div className="title-granapadano">Grana padano</div>
      </div>
      <div className="col-2 col-sm-4 col-md-2 mini-box">
        <div className="cannolosiciliano-picture"></div>
        <div className="title-cannolo">Cannolo siciliano</div>
      </div>
    </div>
  );
};

export default MainDescription;
