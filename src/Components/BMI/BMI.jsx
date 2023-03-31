import React, { useState } from "react";
import styles from "./BMI.module.scss";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [output, setOutput] = useState("");
  const [bmi, setBmi] = useState("");

  const handleWeightChange = (e) => setWeight(e.target.value);
  const handleHeightChange = (e) => setHeight(e.target.value);

  const calculateBMI = (e) => {
    e.preventDefault();
    (() => {
      if (weight && height) {
        const heightM = height / 100;
        let bmi = weight / (heightM * heightM);
        setBmi(bmi.toFixed(2));
  
      } else {
        setBmi(null);
      }
    })();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={calculateBMI}>
        <label className={styles.formElement}>
          Weight (kg):
          <br />
          <input
            type='number'
            value={weight}
            onChange={handleWeightChange}
            placeholder='type your weight'
          />
        </label>
        <label className={styles.formElement}>
          Height (cm):
          <br />
          <input
            type='number'
            value={height}
            onChange={handleHeightChange}
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
