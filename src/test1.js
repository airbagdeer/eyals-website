import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";

export default function TestTest() {
  let [count, setCount] = useState({
    num: 0,
  });

  useEffect(() => {
    setInterval(() => {
      setCount((prevState) => {
        return {
          num: prevState.num + 1,
        };
      });
    }, 1000);
  }, []);

  return (
    <Fragment>
      <div style={{ textAlign: "center" }}>
        <h1>Count: {count.num}</h1>
      </div>
    </Fragment>
  );
}
