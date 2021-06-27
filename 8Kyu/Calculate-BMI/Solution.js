function bmi(weight, height) {
    const index = weight / (height * height);
    let result = (
    index <= 18.5 ? "Underweight" :
    index <= 25.0 ? "Normal" :
    index <= 30.0 ? "Overweight" : "Obese"
    )
    return result;
  }