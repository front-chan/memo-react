//useMemo
// src/App.jsx

import React, { useState, useMemo } from "react";
import List from "./components/List";

const App = () => {
  const [value, setValue] = useState("");

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const data = useMemo(() => {
    return [
      {
        id: 1,
        title: "react",
      },
    ];
  }, []);

  return (
    <div>
      <input type="text" value={value} onChange={onChangeHandler} />
      <List data={data} />
    </div>
  );
};

export default App;

/* useCallback
// src/App.jsx

import React, { useState, useCallback } from "react";
import Button from "./components/Button";

const App = () => {
  // App.js가 리렌더링 될때마다 재생성됨
  const [value, setValue] = useState("");

  // App.js가 리렌더링 될때마다 재생성됨
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  // App.js가 리렌더링 될때마다 재생성됨
  const onClickHandler = useCallback(() => {
    console.log("hello button!");
  }, []);

  return (
    <div>
      <input type="text" value={value} onChange={onChangeHandler} />
      {/* 매번 재생성되는 함수를 props로 넘겨줌 -> Button.js 리렌더링 유발 */ //}
// <Button onClick={onClickHandler} />
// </div>
// );
// };

// export default App;
