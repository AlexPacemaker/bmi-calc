import React, { useState} from "react";
import styles from "./BMI.module.scss";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [output, setOutput] = useState("");
  const [bmi, setBmi] = useState("");

  const handleInputChange = (field, value) => {
    if (field === "weight") {
      setWeight(value);
    } else if (field === "height") {
      setHeight(value);
    }
    setOutput("");
    setBmi("");
  };

  const calculateBMI = (e) => {
    e.preventDefault();
    (() => {
      if (weight && height) {
        const heightM = height / 100;
        let bmi = weight / (heightM * heightM);
        setBmi(bmi.toFixed(2));
        if (bmi < 18.5) {
          setOutput("Недостаток веса");
        } else if (bmi > 18.5 && bmi <= 24.9) {
          setOutput("Нормальный вес");
        } else if (bmi > 25 && bmi <= 29.9) {
          setOutput("Избыточный вес");
        } else if (bmi > 30) {
          setOutput("Ожирение!");
        }
      } else {
        setBmi("");
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
