// components/Button.js

import React, { memo } from "react";

const Button = ({ onClick }) => {
  console.log("리렌더링되고 있어요.");
  return <button onClick={onClick}>버튼</button>;
};

export default memo(Button);
