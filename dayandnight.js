const rope = document.getElementById('rope');
const wall = document.getElementById('wall');
const lamp = document.getElementById('lamp');
let flag = false;

const girl = document.getElementById("girl");

const cockroach = document.getElementById("cockroach");
const cockroach1 = document.getElementById("cockroach1");
const cockroach2 = document.getElementById("cockroach2");
const cockroach3 = document.getElementById("cockroach3");
const cockroach4 = document.getElementById("cockroach4");
const cockroach5 = document.getElementById("cockroach5");
const cockroach6 = document.getElementById("cockroach6");
const cockroach7 = document.getElementById("cockroach7");
const cockroach8 = document.getElementById("cockroach8");
const cockroach9= document.getElementById("cockroach9");

const img1 = document.createElement("img");

const img2 = document.createElement("img");
const img3 = document.createElement("img");
const img4 = document.createElement("img");
const img5 = document.createElement("img");
const img6 = document.createElement("img");
const img7 = document.createElement("img");
const img8 = document.createElement("img");
const img9 = document.createElement("img");
const img10 = document.createElement("img");
const img11 = document.createElement("img");

rope.addEventListener('click', function () {

   if (!flag) {
      // background
      wall.style.backgroundImage = "url('img/wall.png')";
      lamp.style.backgroundImage = "url('img/lamp3.png')";
      //girl
      img1.src = "img/chibi.gif";
      girl.appendChild(img1);
      //cockroach
      img2.src = "img/cockroach.gif";
      img3.src = "img/cockroach.gif";
      img4.src = "img/cockroach.gif";
      img5.src = "img/cockroach.gif";
      img6.src = "img/cockroach.gif";
      img7.src = "img/cockroach.gif";
      img8.src = "img/cockroach.gif";
      img9.src = "img/cockroach.gif";
      img10.src = "img/cockroach.gif";
      img11.src = "img/cockroach.gif";
      cockroach.appendChild(img2);
      cockroach1.appendChild(img3);
      cockroach2.appendChild(img4);
      cockroach3.appendChild(img5);
      cockroach4.appendChild(img6);
      cockroach5.appendChild(img7);
      cockroach6.appendChild(img8);
      cockroach7.appendChild(img9);
      cockroach8.appendChild(img10);
      cockroach9.appendChild(img11);
      
      girl.style.visibility = 'visible';
      cockroach.style.visibility = 'visible';
      cockroach1.style.visibility = 'visible';
      cockroach2.style.visibility = 'visible';
      cockroach3.style.visibility = 'visible';
      cockroach4.style.visibility = 'visible';
      cockroach5.style.visibility = 'visible';
      cockroach6.style.visibility = 'visible';
      cockroach7.style.visibility = 'visible';
      cockroach8.style.visibility = 'visible';
      cockroach9.style.visibility = 'visible';

   } else {
      wall.style.background = "#2D1308";
      lamp.style.backgroundImage = "url('img/lamp2.png')";
      girl.style.visibility = 'hidden';
      cockroach.style.visibility = 'hidden';
      cockroach1.style.visibility = 'hidden';
      cockroach2.style.visibility = 'hidden';
      cockroach3.style.visibility = 'hidden';
      cockroach4.style.visibility = 'hidden';
      cockroach5.style.visibility = 'hidden';
      cockroach6.style.visibility = 'hidden';
      cockroach7.style.visibility = 'hidden';
      cockroach8.style.visibility = 'hidden';
      cockroach9.style.visibility = 'hidden';
   }
   flag = !flag;
});
