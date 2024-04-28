"use strict";

const classes = [
  {
    id: 1,
    category: "Yoga",
    img: "/assets/yoga.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem quis earum officiis quam fugit placeat impedit incidunt amet assumenda laboriosam ipsam quisquam perferendis quibusdam, autem, illo eos cupiditate! Debitis aut beatae alias ullam nobis?",
    time: ["Saturday-Sunday: 8:00am - 10.00am", "Monday-Tuesday: 10:00am - 12.00pm", "Wednesday-Friday: 3:00pm - 6.00pm"]
  },
  {
    id: 2,
    category: "Group",
    img: "/assets/group.webp",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem quis earum officiis quam fugit placeat impedit incidunt amet assumenda laboriosam ipsam quisquam perferendis quibusdam, autem, illo eos cupiditate! Debitis aut beatae alias ullam nobis?",
    time: ["Saturday-Sunday: 12:00pm - 4.00pm", "Tuesday-Thursday: 2:00pm - 4.00pm", "Wednesday-Friday: 6:00pm - 9.00pm"]
  },
  {
    id: 3,
    category: "Solo",
    img: "/assets/solo.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem quis earum officiis quam fugit placeat impedit incidunt amet assumenda laboriosam ipsam quisquam perferendis quibusdam, autem, illo eos cupiditate! Debitis aut beatae alias ullam nobis?",
    time: ["Saturday-Sunday: 10:00am - 12.00am", "Monday-Tuesday: 12:00pm - 2.00pm", "Wednesday-Friday: 2:00pm - 4.00pm"]
  },
  {
    id: 4,
    category: "Stretching",
    img: "/assets/stret.webp",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem quis earum officiis quam fugit placeat impedit incidunt amet assumenda laboriosam ipsam quisquam perferendis quibusdam, autem, illo eos cupiditate! Debitis aut beatae alias ullam nobis?",
    time: ["Saturday-Sunday: 11:00am - 1.00pm", "Tuesday-Thursday: 10:00am - 12.00pm", "Wednesday-Friday: 10:00am - 12.00pm"]
  }
];


const navbar = document.querySelector(".navbar");
const navContainer = document.querySelector(".nav-container");
const containerTop = document.querySelector(".container-top");

document.addEventListener("scroll", () => {
  if(window.pageYOffset != 0) {
    navContainer.classList.add("nav-style");
    containerTop.style.paddingTop = "72px";
  } else {
    navContainer.classList.remove("nav-style");
    containerTop.style.paddingTop = "144px";
  }
});

const checkbox = document.querySelector(".menu-btn");

["resize", "scroll"].forEach((event) =>
  window.addEventListener(event, () => {
    if (checkbox.checked == true) {
      checkbox.checked = false;
    }
  })
);

const groupButtons = document.querySelectorAll(".group-btn");
const groupContent = document.querySelector(".group-content");

groupButtons[0].style.backgroundColor = "#FE9B01";

for(let i = 0; i < groupButtons.length; i++) {
  groupButtons[i].addEventListener("click", () => {
    for(let j = 0; j < groupButtons.length; j++) {
      groupButtons[j].style.backgroundColor = "#355592";
    } 

    groupButtons[i].style.backgroundColor = "#FE9B01";
    groupContent.innerHTML = "";
    const selectedClass = groupButtons[i].innerText;

    classes.forEach((e) => {
      if(e.category == selectedClass) {
        showMenu(e, groupContent);
      }
    });
  });
}

function showMenu(e, groupContent) {
  let div = document.createElement("div");
  div.classList.add("desc");
  div.innerHTML = `<h3>Why are your ${e.category.toLowerCase()}?</h3>
  <p>
  ${e.desc}
  </p>
  <h3>When comes ${e.category.toLowerCase()} Your Time.</h3>
  <p>${e.time[0]}</p>
  <p>${e.time[1]}</p>
  <p>${e.time[2]}</p>
</div>`;
  let img = document.createElement("img");
  img.classList.add("class-img");
  img.src = `${e.img}`;
  img.alt = `${e.category}`;
  groupContent.append(div);
  groupContent.append(img);
}
const imgBoxes = document.querySelectorAll(".img-box");
const trainerFlags = document.querySelectorAll(".trainer-flag");
const trainerNames = document.querySelectorAll(".trainer-name");

for(let i = 0; i < imgBoxes.length; i++) {
  imgBoxes[i].addEventListener ("mouseover", () => {
    trainerFlags[i].classList.remove("hidden");
    trainerNames[i].classList.remove("hidden");
  });
  imgBoxes[i].addEventListener ("mouseout", () => {
    trainerFlags[i].classList.add("hidden");
    trainerNames[i].classList.add("hidden");
  });
}
