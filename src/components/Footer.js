import React, { useState } from "react";

const Footer = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Footer
      <br />
      <button onClick={() => setCount(count + 1)}>count: {count}</button>
    </div>
  );
};
export default Footer;
