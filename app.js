let time = document.querySelector(".time");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const restart = document.querySelector(".reset");
const lap = document.querySelector(".lap");
let second=0,minut=0,hour=0;
function watch(){
	second++;
	if(second==60){
		second=0;
		minut++
		if(minut==60){
			minut=0;
			hour++;
		}
	}
	let s = second < 10 ? "0"+second : second;
	let m = minut < 10 ? "0"+minut : minut;
	let h = hour < 10 ? "0"+hour : hour;
	time.innerText = h+":"+m+" :"+s;
}
let ehlel;
start.addEventListener('click',()=>{ 
	ehlel = setInterval(watch,1000);
});
stop.addEventListener('click', ()=>{
	clearInterval(ehlel);
});
restart.addEventListener ('click',()=>{
	clearInterval(ehlel);
	second=0;
	minut=0;
	hour=0;
	time.innerText="00:00:00";
});
lap.addEventListener ('click',()=>{
	let s = second < 10 ? "0"+second : second;
	let m = minut < 10 ? "0"+minut : minut;
	let h = hour < 10 ? "0"+hour : hour;
	let lapEl = document.createElement('p');
	lapEl.innerText = h+":"+m+":"+s;
	let timer = document.querySelector('.watch');
	timer.append(lapEl);
});