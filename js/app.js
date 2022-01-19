// Tooltips (from getbootstrap.com) v-5.1
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

//Search UI
const searchinput = document.querySelector(".searchinputs");
const fasearch = document.querySelector('.fa-search');

fasearch.addEventListener('click',()=>{
  searchinput.classList.toggle('active');
});

//sidebar
const sidemenubar = document.getElementById('sidemenubar');
const sidebars = document.querySelector('.sidebars');
const sidebarnavitems = document.querySelectorAll('.sidebarnavitems');
const showhides = document.querySelectorAll('#showhide');
const morebtns = document.getElementById('morebtns');

morebtns.addEventListener('click',()=>{
  // console.log('hi');
  sidebars.classList.toggle('active');

  sidebarnavitems.forEach((sidebarnavitem)=>{
          sidebarnavitem.classList.toggle('active');
      });
    
      showhides.forEach(showhide=>{
        showhide.classList.toggle('d-xl-none');
      });
});

// Open/close status 

const sts = document.querySelector('.vdsts');

sts.addEventListener('click',()=>{
  // circle.classList.toggle('active');
  sts.classList.toggle('active');

  if(sts.innerText === 'Open'){
    sts.innerText = "Close";
  }else{
    sts.innerText =" Open";
  }
});

// Date Function
const today = new Date();
let day = document.getElementById("day");
let month = document.getElementById("month");
let yr = document.getElementById("yr");

let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

day.innerText = today.getDate();

let currentmonth = months[today.getMonth()];
document.getElementById('month').innerText = currentmonth;

yr.innerText = today.getUTCFullYear();


// Footer 
const fyear = document.getElementById('fyear');
fyear.textContent = today.getUTCFullYear();

// console.log(fyear);

