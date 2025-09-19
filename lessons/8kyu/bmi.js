console.log('Lesson: BMI');

function bmi(weight, height) {
  let result = weight / Math.pow(height, 2);

  if (result <= 18.5) return 'Underweight';
  if (result <= 25.0) return 'Normal';
  if (result <= 30.0) return 'Overweight';
  if (result > 30) return 'Obese';
}

bmi(50, 1.8);
bmi(80, 1.8);
bmi(90, 1.8);
bmi(100, 1.8);
