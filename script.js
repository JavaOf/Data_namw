function nurbolotLoh(){
let dateNow = new Date();
 let datline = new Date(2024, 9, 1);
 let dif = datline.getTime() - dateNow.getTime();
 let zero = num => num < 10 ? `0${num}` : num; 
 let day = document.getElementById('day');
 let hour = document.getElementById('hour');
 let min = document.getElementById('min');
 let sec = document.getElementById('sec');
 day.textContent = zero((dif / 1000 / 60 / 60 / 24).toFixed(0));
 hour.textContent = zero(((dif / 1000 / 60 / 60) % 24).toFixed(0));
 min.textContent = zero(Math.floor((dif / 1000 / 60) % 60));
 sec.textContent = zero(((dif / 1000) % 60).toFixed(0));
}
 setInterval(nurbolotLoh, 1000);
 nurbolotLoh();
 