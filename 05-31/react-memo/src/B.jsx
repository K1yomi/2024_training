import React from "react";

function B() {
  console.log("B渲染");

  return (
    <>
      <h2>组件B</h2>
    </>
  );
}

export default React.memo(B);
