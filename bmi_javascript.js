function calculate() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  let bmi = ((weight / (height * height)) * 10000).toFixed(1);
  if (bmi <= 18.5) {
    bmi += "  (You are Underweight)";
  } else if (bmi > 18.5 && bmi <= 24.9) {
    bmi += "  (You are Normal)";
  } else if (bmi > 25 && bmi <= 29.9) {
    bmi += "  (You are Over weight)";
  } else if (bmi >= 30) {
    bmi += "  (You are Obese)";
  } else {
    bmi = "Wrong Input";
  }
  document.querySelector(".result").innerHTML = `BMI RESULT :  ${bmi}`;
}
