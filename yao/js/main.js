var can = document.getElementById("can");
var ctx = can.getContext("2d");
var w = document.body.clientWidth;
var h = 720 / 1280 * w; //窗口大小
var SCALE = 1; //缩放比例
var maintimer = null;
var timer = null; //间隔计时器
var time = null; //间隔
mouse = {
	x: "-1",
	y: "-1",
	clickX: "-1",
	clickY: "-1"
}
window.onload = function() {
	game = new game();
	game.windowsize(w, h);
	game.init(0); //位置初始化
	game.gameLoad(0); //加载第一张图（相应对象初始化
	
	game.gameRander();

	window.onresize = function() {
		w = document.body.clientWidth;
		h = 720 / 1280 * w;
		game.windowsize(w, h);
	}

	can.onclick = function(e) {
		mouse.clickX = e.offsetX;
		mouse.clickY = e.offsetY;
		if(game.ifstop == 1) { //点击任意处继续游戏
			game.ifstop = 0;
			mouse.clickX = 0;
			mouse.clickY = 0; //暂停时如果点击的是暂停按钮会出BUG
			game.gameStop();
		}
		if(popup.type == 1 && popup.display) {
			mouse.clickX = 0;
			mouse.clickY = 0;
			anime.init(1);
			anime.finish = function() {
				popup.type = 0;
				popup.display = false;
				game.init(0);
				game.status = 0;
			}
		}
	}
	can.onmousemove = function(e) {
		mouse.x = e.offsetX;
		mouse.y = e.offsetY;
	}

	function killtime() {
		time = null;
	}

}