import React from "react";
import "../css/progressbar.css";
import { TiTick } from "react-icons/ti";
import PropTypes from 'prop-types';

const ProgressBar = ({ currentStep, steps }) => {
  return (
    <div className="stepper-container">
      {steps?.map((step, i) => (
        <div
          key={i}
          className={`step-item ${currentStep === i + 1 && "active"} ${
            (i + 1 < currentStep) && "complete"
          } `}
        >
          <div className="step">
            {i + 1 < currentStep ? <TiTick size={24} /> : i + 1}
          </div>
          <p className="text-gray-500">{step}</p>
        </div>
      ))}
    </div>
  );
};

ProgressBar.propTypes = {
  currentStep: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
};

export default ProgressBar;
