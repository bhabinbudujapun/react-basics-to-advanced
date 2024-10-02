import { useState } from "react";

function HooksExpepriment() {
  let [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount((count = 0));
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card text-center">
          <div className="card-header d-flex justify-content-between align-items-center">
            <span>0</span>
            <span>COUNTER</span>
            <span>20</span>
          </div>

          <div className="card-body">
            <h5 className="card-title py-3">{count}</h5>

            <button
              type="button"
              onClick={decreaseCount}
              className="btn btn-outline-danger m-1"
              disabled={count == 0}>
              DECREASE
            </button>
            <button
              type="button"
              onClick={resetCount}
              className="btn btn-outline-primary m-1">
              RESET
            </button>
            <button
              type="button"
              onClick={increaseCount}
              className="btn btn-outline-success m-1"
              disabled={count == 20}>
              INCREASE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HooksExpepriment;
