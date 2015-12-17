// 全局变量，棋盘
var qiPan = [[0,0,0,],[0,0,0,],[0,0,0]];
// 全局变量标记
var biaoJiI = 0;
var biaoJiJ = 0;

// 画出棋盘
function huaQiPan(){
	for(var i=1;i<4;i++){
		for(var j=1;j<4;j++){
			var qiZi = document.getElementById(i+'-'+j);
			switch (qiPan[i-1][j-1])
			{
				case 1:
					qiZi.innerHTML = 'You';
					break;
				case -1:
					qiZi.innerHTML = "Com";
					break;
				default:
					break;
			}
		}
	}
}

// 判断哪方获胜
function shuiSheng(){
	// 获取一下玩家连在一起的线的数目
	if(huoQuXian(1)){
		return 1;
	}
	if(huoQuXian(-1)){
		return -1;
	}
	// 如果是平局
	var pingJu = 1;
	for(var i=0;i<3;i++){
		for(var j=0;j<3;j++){
			if(qiPan[i][j] === 0){
				pingJu = 0;
			}
		}
	}
	if(pingJu){
		return 2;
	}
	return 0;
}

// 获取线
function huoQuXian(jueSe){
	var xianShu = 0;
	var sum = 0;
	// 行
	for(var i=0;i<3;i++){
		sum = 0;
		for(var j=0;j<3;j++){
			sum += qiPan[i][j];
		}
		if(sum === jueSe*3){
			xianShu++;
		}
	}
	// 列
	for(var j=0;j<3;j++){
		sum=0;
		for(var i=0;i<3;i++){
			sum += qiPan[i][j];
		}
		if(sum === jueSe*3){
			xianShu++;
		}
	}
	// 对角线
	if(qiPan[0][0]+qiPan[1][1]+qiPan[2][2] === jueSe*3){
		xianShu++;
	}
	if(qiPan[0][2]+qiPan[1][1]+qiPan[2][0] === jueSe*3){
		xianShu++;
	}
	return xianShu;
}

// 添加点击事件
for(var i=1;i<4;i++){
	for(var j=1;j<4;j++){
		var qiZi = document.getElementById(i+'-'+j);
		// 更改全局变量
		qiZi.addEventListener('click',function(event){
			// 从被点击的元素的id来判断他是谁
			var i = event.target.id.split('-')[0]-1;
			var j = event.target.id.split('-')[1]-1;
			console.log(i);
			qiPan[i][j] = 1;
			huaQiPan();
			// 玩家赢了
			if(shuiSheng() === 1){
				console.log('你赢了');
			}else if(shuiSheng() === -1){
				console.log('你输了');
			}else if(shuiSheng() === 2){
				console.log('平局');
			}
		})
	}
}
huaQiPan()