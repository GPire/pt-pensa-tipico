import React from "react";
import PropType from "prop-types";

const Header = ({ color = "red", searchEnabled = true }) => {
  return (
    <div style={{ color: color }}>
      HEADER
      {searchEnabled && <input type="text" />}
    </div>
  );
};

Header.propTypes = {
  color: PropType.string,
  searchEnabled: PropType.bool,
};

export default Header;
