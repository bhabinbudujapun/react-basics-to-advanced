import { useState } from "react";
import HooksExpepriment from "./components/hooksexperiment/HooksExperiment";
import PropsExperiment from "./components/propsexperiment/PropsExperiment";

function App() {
  const user = {
    uname: "Rehan Roy",
    ubio: "I started my business with a passion for solving a problem. Through hard work and dedication, I turned my idea into a thriving company that provides value to our customers.",
    ulink: "click here",
  };

  let [color, setColor] = useState("#fff");

  /*
Primary (btn-primary): #0d6efd (Bootstrap blue)
Secondary (btn-secondary): #6c757d (Bootstrap gray)
Success (btn-success): #198754 (Bootstrap green)
Danger (btn-danger): #dc3545 (Bootstrap red)
Warning (btn-warning): #ffc107 (Bootstrap yellow)
Info (btn-info): #0dcaf0 (Bootstrap cyan)
Light (btn-light): #f8f9fa (Bootstrap light gray)
Dark (btn-dark): #212529 (Bootstrap dark gray)
  */

  return (
    <>
      <div
        className="vh-100 d-flex flex-column"
        style={{ backgroundColor: color }}>
        {/* Grid container */}
        <div className="container h-100">
          {/* First Row: Two components side by side */}
          <div className="row h-50 align-items-center">
            <div className="col d-flex justify-content-center">
              <PropsExperiment userinfo={user} />
            </div>
            <div className="col d-flex justify-content-center">
              <HooksExpepriment />
            </div>
          </div>

          {/* Second Row: Buttons centered */}
          <div className="row h-50 align-items-end">
            <div className="col d-flex justify-content-center">
              <div className="py-2 rounded bg-info">
                <button
                  type="button"
                  className="btn btn-primary mx-2"
                  onClick={() => setColor("#0d6efd")}>
                  Primary
                </button>
                <button
                  type="button"
                  className="btn btn-secondary mx-2"
                  onClick={() => setColor("#6c757d")}>
                  Secondary
                </button>
                <button
                  type="button"
                  className="btn btn-success mx-2"
                  onClick={() => setColor("#198754")}>
                  Success
                </button>
                <button
                  type="button"
                  className="btn btn-danger mx-2"
                  onClick={() => setColor("#dc3545")}>
                  Danger
                </button>
                <button
                  type="button"
                  className="btn btn-warning mx-2"
                  onClick={() => setColor("#ffc107")}>
                  Warning
                </button>
                <button
                  type="button"
                  className="btn btn-light mx-2"
                  onClick={() => setColor("#f8f9fa")}>
                  Light
                </button>
                <button
                  type="button"
                  className="btn btn-dark mx-2"
                  onClick={() => setColor("#212529")}>
                  Dark
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
