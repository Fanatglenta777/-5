var today = new Date();
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var day = today.getDay();
var days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
console.log("Сегодня:", days[day]);
var format, h;

if (hour <= 12) {
  format = "AM";
} else {
  format = "PM";
}

if (hour > 12) {
  h = hour - 12;
} else {
  h = hour;
}
console.log("Текущее время: ", h, format, ":", minute, ":", second);
