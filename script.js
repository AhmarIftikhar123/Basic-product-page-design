const select_btn = document.querySelectorAll(".select_btn"),
  hero_img = document.getElementById("hero");

//   1st pattern of write this code;

select_btn[0].onclick = function()  {
  hero_img.src = "imgs/image1.png";
  for(let btn of select_btn){
    btn.classList.remove('active');
  }
  this.classList.add('active');
};
select_btn[1].onclick = function()  {
  hero_img.src = "imgs/image2.png";
  for(let btn of select_btn){
    btn.classList.remove('active');
  }
  this.classList.add('active');
};
select_btn[2].onclick = function()  {
  hero_img.src = "imgs/image3.png";
  for(let btn of select_btn){
    btn.classList.remove('active');
  }
  this.classList.add('active');
};

//   2nd pattern of write this code;

// select_btn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     if (btn.classList.contains("one")) {
//       select_btn.forEach((btn) => {
//         btn.classList.remove("active");
//       });
//       btn.classList.add("active");
//       hero_img.src = "imgs/image1.png";
//     } else if (btn.classList.contains("two")) {
//       select_btn.forEach((btn) => {
//         btn.classList.remove("active");
//       });
//       btn.classList.add("active");
//       hero_img.src = "imgs/image2.png";
//     } else if (btn.classList.contains("three")) {
//       select_btn.forEach((btn) => {
//         btn.classList.remove("active");
//       });
//       btn.classList.add("active");
//       hero_img.src = "imgs/image3.png";
//     }
//   });
// });
