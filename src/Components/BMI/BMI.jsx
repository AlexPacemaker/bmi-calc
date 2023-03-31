import React from "react";
import styles from "./BMI.module.scss";
import {
  setBmi,
  setHeight,
  setOutput,
  setWeight,
} from "../../redux/slices/bmiSlice";
import { useDispatch, useSelector } from "react-redux";
import { calculateBMI } from "../../utils/calc";

const BMI = () => {
  const { weight, height, output, bmi } = useSelector(
    (state) => state.bmiSlice
  );
  const dispatch = useDispatch();

  const handleInputChange = (field, value) => {
    if (field === "weight") {
      dispatch(setWeight(value));
    } else if (field === "height") {
      dispatch(setHeight(value));
    }
    dispatch(setOutput(""));
    dispatch(setBmi(""));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI(weight, height, dispatch, setBmi, setOutput);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label className={styles.formElement}>
          Weight (kg):
          <br />
          <input
            type='number'
            value={weight}
            onChange={(e) => handleInputChange("weight", e.target.value)}
            placeholder='type your weight'
          />
        </label>
        <label className={styles.formElement}>
          Height (cm):
          <br />
          <input
            type='number'
            value={height}
            onChange={(e) => handleInputChange("height", e.target.value)}
            placeholder='type your height'
          />
        </label>
        <button className={styles.btn} type='submit'>
          Calculate BMI
        </button>
      </form>
      <div className={styles.outputContainer}>
        <div className={styles.output}>{<p>Your BMI is {bmi}</p>}</div>
        <div className={styles.output}>
          <p>Recomendation: {output}</p>
        </div>
      </div>
    </div>
  );
};

export default BMI;
