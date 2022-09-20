
let data = ["Lesson_1", "Lesson_2", "Lesson_3", "Lesson_4", "Lesson_5"];

let list = document.getElementById("tableOfContents");

data.forEach((item) => {
  let li = document.createElement("li");
  li.innerHTML = "<a href=" + item + ".html>" + item + "</a>"
  list.appendChild(li);




});