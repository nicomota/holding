
/* Menu */
let menu = document.querySelector(".menu");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  menu.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  menu.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(menu.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}

/* STATISTICS */
var data = {
  labels: ["Janeiro", "Fevereiro ", " Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro", ],
  datasets: [{
          label: 'Aberto',
          backgroundColor: "#2298F1",
          data: [5, 10, 8, 15, 20, 35, 24, 30, 40, 10, 16, 11],
      },
      {
          label: 'Concluídos',
          backgroundColor: "#66B92E",
          data: [2, 5, 6, 14, 18, 30, 20, 30, 35, 8, 14, 10],
      },
      {
          label: 'Homologação',
          backgroundColor: "#FF392Bff",
          data: [3, 4, 2, 10, 2, 5, 6, 10, 20, 1, 7, 5],
      },
  ]
};

var options = {
  cornerRadius: 0,
  maintainAspectRatio: false,
  legend: {
      display: false,
      position: 'bottom',
      labels: {
          fontColor: "rgba(0,0,0, 0.5)",
      }
  },
  scales: {
      yAxes: [{
          gridLines: {
              display: false,
          },
          ticks: {
              maxTicksLimit: 5,
          }
      }],
      xAxes: [{
          barPercentage: 0.25,
          gridLines: {
              display: false,
          },
      }]
  }
};


var ctx = document.getElementById('statisticsChart').getContext('2d');
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});

var element = document. querySelector(".my-div");
var text = document. createTextNode("Some text here!");
element. appendChild(text);











