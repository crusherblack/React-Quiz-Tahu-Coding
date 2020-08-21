import React, { useState } from "react";

const Content = ({ title }) => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>
        {title} - {counter}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>Click Me</button>
      <button onClick={() => counter > 0 && setCounter(counter - 1)}>
        Click Me Dec
      </button>
    </>
  );
};

export default Content;
