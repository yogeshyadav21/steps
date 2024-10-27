import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, changeStep] = useState(1);
  const [display, changeDisplay] = useState(true);

  const previousStep = () => {
    if (step >= 2) {
      changeStep(step - 1);
    } else alert("There is no prevous step");
  };

  const nextStep = () => {
    if (step < messages.length) {
      changeStep(step + 1);
    } else alert("There is no next step");
  };

  return (
    <>
      <button className="close" onClick={() => changeDisplay(!display)}>
        X
      </button>
      {display && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 && "active"}>1</div>
            <div className={step >= 2 && "active"}>2</div>
            <div className={step >= 3 && "active"}>3</div>
          </div>
          <div className="message">{messages[step - 1]}</div>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={previousStep}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
