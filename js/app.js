let minut = +prompt("timer_yozvor:");
let soniya = minut * 60;

let vaqt = setInterval(function () {
  let mlisec = Math.floor(soniya / 60);
  let sec = soniya % 60;

  mlisec = String(m).padStart(2, "0");
  sec = String(s).padStart(2, "0");

  console.log(mlisec + ":" + sec);

  soniya--;

  if (soniya < 0) {
    clearInterval(vaqt);
  }
}, 1000);
