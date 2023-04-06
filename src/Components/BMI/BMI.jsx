import React from "react";
import styles from "./BMI.module.scss";
import {
  setBmi,
  setHeight,
  setOutput,
  setWeight,
  bmiData,
} from "../../redux/slices/bmiSlice";
import { useDispatch, useSelector } from "react-redux";
import { calculateBMI } from "../../utils/calc";

//Создаем функц.компонент, с основой логикой приложения
const BMI = () => {
  const { weight, height, output, bmi } = useSelector(bmiData);
  const dispatch = useDispatch();

  // Эта функция обрабатывает изменения вводимых пользователем значений в полях веса и роста. Если значение изменено в поле веса, функция отправляет действие "setWeight" с новым значением в хранилище redux. Если значение изменено в поле роста, функция отправляет действие "setHeight" с новым значением в хранилище redux. Затем функция отправляет действие "setOutput" и "setBmi", чтобы очистить вывод, который может быть отображен на странице.
  const handleInputChange = (field, value) => {
    if (field === "weight") {
      dispatch(setWeight(value));
    } else if (field === "height") {
      dispatch(setHeight(value));
    }
    dispatch(setOutput(""));
    dispatch(setBmi(""));
  };

  //Эта функция обрабатывает отправку формы, используемой для расчета индекса массы тела (BMI) на основе данных о весе и росте пользователя. Она вызывает функцию `calculateBMI`, передавая ей значения веса и роста, объект dispatch и две функции для сохранения результата расчета и вывода сообщения об ошибке. Функция `e.preventDefault()` используется для предотвращения перезагрузки страницы при отправке формы.
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI(weight, height, dispatch, setBmi, setOutput);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label className={styles.formElement}>
          Вес (кг):
          <br />
          <input
            type='number'
            value={weight}
            onChange={(e) => handleInputChange("weight", e.target.value)}
            placeholder='напишите ваш вес'
          />
        </label>
        <label className={styles.formElement}>
          Рост (см):
          <br />
          <input
            type='number'
            value={height}
            onChange={(e) => handleInputChange("height", e.target.value)}
            placeholder='напишите ваш рост'
          />
        </label>
        <button className={styles.btn} type='submit'>
          Вычислить ИМТ
        </button>
      </form>
      <div className={styles.outputContainer}>
        <div className={styles.output}>{<p>Ваш ИМТ: {bmi}</p>}</div>
        <div className={styles.output}>
          <p>Результат: {output}</p>
        </div>
      </div>
    </div>
  );
};

export default BMI;
