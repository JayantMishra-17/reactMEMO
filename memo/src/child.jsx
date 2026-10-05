import { memo } from "react";

function Child({ handleClick }) {
  console.log("Child Re-Render hone se roko MEMO");
  return (
    <>
      <button onClick={handleClick}>click</button>
    </>
  );
}
export default memo(Child);
