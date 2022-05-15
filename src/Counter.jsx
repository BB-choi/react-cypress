import { useState } from "react";
import "./Counter.css";

const INITIAL_COUNT = 0;
const MIN_COUNT = 0;
const MAX_COUNT = 5;
const COUNT_PER_CLICK = 1;

const Counter = () => {
  const [count, setCount] = useState(INITIAL_COUNT);

  const onClickDecreaseButton = () => {
    if (count > MIN_COUNT) {
      setCount(count - COUNT_PER_CLICK);
    }
  };

  const onClickIncreaseButton = () => {
    if (count < MAX_COUNT) {
      setCount(count + COUNT_PER_CLICK);
    }
  };

  const onClickResetButton = () => {
    setCount(INITIAL_COUNT);
  };

  return (
    <>
      <span id="count-value">{count}</span>
      <div className="buttons">
        <button
          id="decrease-button"
          className="button"
          onClick={onClickDecreaseButton}
        >
          -
        </button>
        <button id="reset" className="button" onClick={onClickResetButton}>
          Reset
        </button>
        <button
          id="increase-button"
          className="button"
          onClick={onClickIncreaseButton}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
