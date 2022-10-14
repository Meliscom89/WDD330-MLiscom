
let data = ["Lesson_1", "Lesson_2", "Lesson_3", "Lesson_4", "Lesson_5", "Lesson_6", "Lesson_7", "Lesson_8", "Lesson_9", "Lesson_10", "Lesson_11", "Lesson_12", "Lesson_13", "Lesson_14"];

let list = document.getElementById("tableOfContents");

data.forEach((item) => {
  let li = document.createElement("li");
  li.innerHTML = "<a href=" + item + ".html>" + item + "</a>"
  list.appendChild(li);




});
