function calculateAverageGrade(array) {
  let average;
  let allGrades = [];
  let sum = 0;
  let countGrades = 0;
  for (let i = 0; i < array.length; i++) {
    const grades = array[i].grades;
    grades;

    grades.forEach((grade) => {
      grade;
      sum += grade;
      countGrades += 1;
      countGrades;
      sum;
      allGrades.unshift(grade);
      allGrades;
    });
  }

  countGrades;
  return sum / countGrades;

  // let sum2 = 0;
  // for (let i = 0; i < allGrades.length; i++) {
  //     sum2 += allGrades[i]
  // }
  //  return sum2 / allGrades.length

  return getAverage(allGrades);
}

function getAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

const grades1 = [
  { name: "John", grades: [80, 90, 100] },
  { name: "Jane", grades: [75, 85, 95] },
  { name: "Bob", grades: [60, 70, 80] },
];

const result1 = calculateAverageGrade(grades1);
result1;
// const result2 = calculateAverageGrade(grades2);
