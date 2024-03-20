// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const totalScore = students.reduce((total, {score}) => {
//     return total + score;
// }, 0);
// console.log(totalScore);

// const averageScore = totalScore / students.length;
// console.log(averageScore);


// const array = [5, 16, 0, 54, 12, 1029, 4];

// const sortedArr = array.toSorted();

// console.log(sortedArr);

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted();
// console.log(ascendingScores);

// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = scores.toSorted((a, b) => a - b);
// console.log(descendingScores); // 




// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);
// console.log('зростаюча', ascendingReleaseDates);
// console.log('спадаюча', descendingReleaseDates);


// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// const inAlphab = students.toSorted((a, b) => b.localeCompare(a) )
// console.log(inAlphab)


// за зростанням кількості балів
// за спаданням кількості балів
// за ім'ям студента в алфавітному порядку
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const scoreAscending = students.toSorted((firstStudent, secondStudent) => firstStudent.score - secondStudent.score);
// const scoreDescending = students.toSorted((firstStudent, secondStudent) => secondStudent.score - firstStudent.score);

// const alphabeticalOrder = students.toSorted((firstStudent, secondStudent) => firstStudent.name.localeCompare(secondStudent.name));

// const reverseOrder = students.toSorted((firstStudent, secondStudent) => secondStudent.name.localeCompare(firstStudent.name));

// console.log(scoreAscending);
// console.log(scoreDescending)
// console.log(alphabeticalOrder)
// console.log(reverseOrder)


// У нас є масив об'єктів з іменами, балами й відвідуваними предметами кожного студента.
// Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за тест.
// Для цього:

// Відсортуємо масив методом toSorted(),
// Після чого методом map() створимо масив значень властивості name з відсортованого масиву.

const students = [
  { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
  { name: "Poly", score: 59, courses: ["science", "mathematics"] },
  { name: "Ajax", score: 37, courses: ["physics", "biology"] },
  { name: "Kiwi", score: 94, courses: ["literature", "science"] },
];

const studentNamesArray = students.toSorted((firstStudent, secondStudent) => firstStudent.score - secondStudent.score).map(student => student.name);

console.log(studentNamesArray)
