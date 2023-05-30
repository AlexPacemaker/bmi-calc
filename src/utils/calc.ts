// Эта функция вычисляет индекс массы тела (ИМТ) по введенным пользователем значениям веса и роста. Результат сохраняется с помощью функций `setBmi` и `setOutput`, которые передаются в качестве аргументов. Также функция использует функцию `dispatch`, которая позволяет изменять состояние приложения в Redux. ИМТ может быть использован для оценки того, насколько здоровым является вес человека. Функция также выдаёт один из четырёх возможных текстовых комментариев о состоянии веса, зависящий от полученного результата.

import { AnyAction, Dispatch } from "@reduxjs/toolkit";

export const calculateBMI = (
  weight: number | null | undefined,
  height: number | null | undefined,
  dispatch: Dispatch<AnyAction>,
  setBmi: Function,
  setOutput: Function
) => {
  (() => {
    if (weight && height) {
      const heightM = height / 100;
      let bmi = weight / (heightM * heightM);
      dispatch(setBmi(bmi.toFixed(2)));
      if (bmi < 18.5) {
        dispatch(setOutput("Недостаток веса"));
      } else if (bmi > 18.5 && bmi <= 24.9) {
        dispatch(setOutput("Нормальный вес"));
      } else if (bmi > 25 && bmi <= 29.9) {
        dispatch(setOutput("Избыточный вес"));
      } else if (bmi > 30) {
        dispatch(setOutput("Ожирение!"));
      }
    } else {
      dispatch(setBmi(""));
    }
  })();
};
