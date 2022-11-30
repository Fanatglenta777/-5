var student = ["Ида", "Лена", "Артур", "Платон"];
student["Ида"] = 37;
student["Лена"] = 46;
student["Артур"] = 70;
student["Платон"] = 88;
var score = 0;
var ball = 0;
var grade = ["Незачет", "3", "4", "5"];

for (i = 0; i < student.length; i++) {
  score += student[student[i]];
  ball = score / student.length;
  if (ball < 60) {
    ball = grade[0];
  } else if (ball > 60 && ball < 70) {
    ball = grade[1];
  } else if (ball > 70 && ball < 80) {
    ball = grade[2];
  } else if (ball > 80 && ball < 100) {
    ball = grade[3];
  }
  console.log(student[i] + ":" + student[student[i]] + " " + "баллов");
}
console.log(" ");

for (i = 0; i < student.length; i++) {
  if (student[student[i]] < 60) {
    student[student[i]] = grade[0];
  }
  if (student[student[i]] >= 60 && student[student[i]] < 70) {
    student[student[i]] = grade[1];
  }
  if (student[student[i]] >= 70 && student[student[i]] < 80) {
    student[student[i]] = grade[2];
  }
  if (student[student[i]] >= 80 && student[student[i]] < 100) {
    student[student[i]] = grade[3];
  }
  console.log(student[i] + ":" + student[student[i]]);
}
console.log(" ");
console.log("Средняя оценка следующих студентов:" + ball);
