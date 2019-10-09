const canvas = document.getElementById('canvas');
const timerView = document.getElementById('timer');
const startBtn = document.getElementById('btn-start');


const coinImgs = document.querySelectorAll('.gain img');
const gainSpans = document.querySelectorAll('.gain span');


var gains = [0,0,0,0,0];


var ctx = canvas.getContext('2d');

const rows = 10;
const cols = 4;
var totalRows = 20;

const brickWidth = 50;


var goldBricks = [];
var time = 0;
const interval = 10 ;
var timer = null; 
var a=0;


drawGrid();

function start(){
	a++;
	startBtn.disabled=true;
	genBricks();
	
	drawBricks();
	
	
	canvas.addEventListener('click', function(event){
		//var x = event.clientX - canvas.offsetLeft;
		//var y = event.clientY - canvas.offsetTop;
		var x = event.offsetX;
		var y = event.offsetY;
		
		var col = Math.floor(x/brickWidth);
		var row = Math.floor(y/brickWidth);
		
		
		var brick = goldBricks[row];
		if(brick.col === col){
			gains[brick.coin] += 1;
			gainSpans[brick.coin].innerHTML = gains[brick.coin];
			if(row === rows - 1)
				
				eraseLine();
		}else{
		
			clearInterval(timer);
			alert('游戏结束，请点击重新开始');
			startBtn.disabled = false;
		}
	});

	time = 0;
	timer = setInterval(refresh, interval);
}
function restart()
{
	if(a!=0)
	location.reload();
}

function drawBricks(){
	for(i in goldBricks){
		var brick = goldBricks[i];
		if(brick !== null)
			ctx.drawImage(coinImgs[brick.coin],brick.col*brickWidth+1,
				i * brickWidth + 1, brickWidth - 2, brickWidth - 2);
	}
}


function eraseLine(){
	totalRows--;
	clearBrick();//
	if(totalRows > rows)
		goldBricks.unshift(genBrick());// 
	else
		goldBricks.unshift(null);
	drawBricks();
	if(totalRows === 1){
		//
		clearInterval(timer);
		startBtn.disabled = false;
	}
}

function clearBrick(){
	for(i in goldBricks){
		var brick = goldBricks[i];
		if(brick !== null)
			ctx.clearRect(brick.col*brickWidth+1,
				i * brickWidth + 1, brickWidth - 2, brickWidth - 2);
	}
}

function drawGrid(){
	for(var i = 0; i < rows; i++)
		for(var j = 0; j < cols; j++){
			ctx.rect(j * brickWidth, i * brickWidth, brickWidth, brickWidth);
			ctx.strokeStyle = 'gray';
			ctx.stroke();
		}
}

function genBrick(){
	return{
		col: Math.floor(Math.random()*cols),
		coin: Math.floor(Math.random()*coinImgs.length) 
	}
}

function genBricks(){
	for(i = 0; i < rows; i++)
		goldBricks[i] = genBrick();
}

function refresh(){
	time += interval;
	timerView.innerHTML = time/1000 + '秒';
}