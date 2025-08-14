let minut = +prompt("timer:");
let soniya = minut * 60;

let vaqt = setInterval(function () {
  let m = Math.floor(soniya / 60);
  let s = soniya % 60;

  m = String(m).padStart(2, "0");
  s = String(s).padStart(2, "0");

  console.log(m + ":" + s);

  soniya--;

  if (soniya < 0) {
    clearInterval(vaqt);
    console.log("Tayyor!");
  }
}, 1000);
