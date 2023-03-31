export const calculateBMI = (weight, height, dispatch, setBmi, setOutput) => {
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
