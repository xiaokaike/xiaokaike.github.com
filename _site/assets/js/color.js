/*
 *
 */

var coArr=[{"en":"LightPink","name":"浅粉红","hex":"#FFB6C1",},{"en":"Pink","name":"粉红","hex":"#FFC0CB",},{"en":"Crimson","name":"猩红","hex":"#DC143C",},{"en":"LavenderBlush","name":"脸红的淡紫色","hex":"#FFF0F5",},{"en":"PaleVioletRed","name":"苍白的紫罗兰红色","hex":"#DB7093",},{"en":"HotPink","name":"热情的粉红","hex":"#FF69B4",},{"en":"DeepPink","name":"深粉色","hex":"#FF1493",},{"en":"MediumVioletRed","name":"适中的紫罗兰红色","hex":"#C71585",},{"en":"Orchid","name":"兰花的紫色","hex":"#DA70D6",},{"en":"Thistle","name":"蓟","hex":"#D8BFD8",},{"en":"plum","name":"李子","hex":"#DDA0DD",},{"en":"Violet","name":"紫罗兰","hex":"#EE82EE",},{"en":"Magenta","name":"洋红","hex":"#FF00FF",},{"en":"Fuchsia","name":"灯笼海棠(紫红色)","hex":"#FF00FF",},{"en":"DarkMagenta","name":"深洋红色","hex":"#8B008B",},{"en":"Purple","name":"紫色","hex":"#800080",},{"en":"MediumOrchid","name":"适中的兰花紫","hex":"#BA55D3",},{"en":"DarkVoilet","name":"深紫罗兰色","hex":"#9400D3",},{"en":"DarkOrchid","name":"深兰花紫","hex":"#9932CC",},{"en":"Indigo","name":"靛青","hex":"#4B0082",},{"en":"BlueViolet","name":"深紫罗兰的蓝色","hex":"#8A2BE2",},{"en":"MediumPurple","name":"适中的紫色","hex":"#9370DB",},{"en":"MediumSlateBlue","name":"适中的板岩暗蓝灰色","hex":"#7B68EE",},{"en":"SlateBlue","name":"板岩暗蓝灰色","hex":"#6A5ACD",},{"en":"DarkSlateBlue","name":"深岩暗蓝灰色","hex":"#483D8B",},{"en":"Lavender","name":"熏衣草花的淡紫色","hex":"#E6E6FA",},{"en":"GhostWhite","name":"幽灵的白色","hex":"#F8F8FF",},{"en":"Blue","name":"纯蓝","hex":"#0000FF",},{"en":"MediumBlue","name":"适中的蓝色","hex":"#0000CD",},{"en":"MidnightBlue","name":"午夜的蓝色","hex":"#191970",},{"en":"DarkBlue","name":"深蓝色","hex":"#00008B",},{"en":"Navy","name":"海军蓝","hex":"#000080",},{"en":"RoyalBlue","name":"皇军蓝","hex":"#4169E1",},{"en":"CornflowerBlue","name":"矢车菊的蓝色","hex":"#6495ED",},{"en":"LightSteelBlue","name":"淡钢蓝","hex":"#B0C4DE",},{"en":"LightSlateGray","name":"浅石板灰","hex":"#778899",},{"en":"SlateGray","name":"石板灰","hex":"#708090",},{"en":"DoderBlue","name":"道奇蓝","hex":"#1E90FF",},{"en":"AliceBlue","name":"爱丽丝蓝","hex":"#F0F8FF",},{"en":"SteelBlue","name":"钢蓝","hex":"#4682B4",},{"en":"LightSkyBlue","name":"淡蓝色","hex":"#87CEFA",},{"en":"SkyBlue","name":"天蓝色","hex":"#87CEEB",},{"en":"DeepSkyBlue","name":"深天蓝","hex":"#00BFFF",},{"en":"LightBLue","name":"淡蓝","hex":"#ADD8E6",},{"en":"PowDerBlue","name":"火药蓝","hex":"#B0E0E6",},{"en":"CadetBlue","name":"军校蓝","hex":"#5F9EA0",},{"en":"Azure","name":"蔚蓝色","hex":"#F0FFFF",},{"en":"LightCyan","name":"淡青色","hex":"#E1FFFF",},{"en":"PaleTurquoise","name":"苍白的绿宝石","hex":"#AFEEEE",},{"en":"Cyan","name":"青色","hex":"#00FFFF",},{"en":"Aqua","name":"水绿色","hex":"#00FFFF",},{"en":"DarkTurquoise","name":"深绿宝石","hex":"#00CED1",},{"en":"DarkSlateGray","name":"深石板灰","hex":"#2F4F4F",},{"en":"DarkCyan","name":"深青色","hex":"#008B8B",},{"en":"Teal","name":"水鸭色","hex":"#008080",},{"en":"MediumTurquoise","name":"适中的绿宝石","hex":"#48D1CC",},{"en":"LightSeaGreen","name":"浅海洋绿","hex":"#20B2AA",},{"en":"Turquoise","name":"绿宝石","hex":"#40E0D0",},{"en":"Auqamarin","name":"绿玉碧绿色","hex":"#7FFFAA",},{"en":"MediumAquamarine","name":"适中的碧绿色","hex":"#00FA9A",},{"en":"MediumSpringGreen","name":"适中的春天的绿色","hex":"#F5FFFA",},{"en":"MintCream","name":"薄荷奶油","hex":"#00FF7F",},{"en":"SpringGreen","name":"春天的绿色","hex":"#3CB371",},{"en":"SeaGreen","name":"海洋绿","hex":"#2E8B57",},{"en":"Honeydew","name":"蜂蜜","hex":"#F0FFF0",},{"en":"LightGreen","name":"淡绿色","hex":"#90EE90",},{"en":"PaleGreen","name":"苍白的绿色","hex":"#98FB98",},{"en":"DarkSeaGreen","name":"深海洋绿","hex":"#8FBC8F",},{"en":"LimeGreen","name":"酸橙绿","hex":"#32CD32",},{"en":"Lime","name":"酸橙色","hex":"#00FF00",},{"en":"ForestGreen","name":"森林绿","hex":"#228B22",},{"en":"Green","name":"纯绿","hex":"#008000",},{"en":"DarkGreen","name":"深绿色","hex":"#006400",},{"en":"Chartreuse","name":"查特酒绿","hex":"#7FFF00",},{"en":"LawnGreen","name":"草坪绿","hex":"#7CFC00",},{"en":"GreenYellow","name":"绿黄色","hex":"#ADFF2F",},{"en":"OliveDrab","name":"橄榄土褐色","hex":"#556B2F",},{"en":"Beige","name":"米色(浅褐色)","hex":"#6B8E23",},{"en":"LightGoldenrodYellow","name":"浅秋麒麟黄","hex":"#FAFAD2",},{"en":"Ivory","name":"象牙","hex":"#FFFFF0",},{"en":"LightYellow","name":"浅黄色","hex":"#FFFFE0",},{"en":"Yellow","name":"纯黄","hex":"#FFFF00",},{"en":"Olive","name":"橄榄","hex":"#808000",},{"en":"DarkKhaki","name":"深卡其布","hex":"#BDB76B",},{"en":"LemonChiffon","name":"柠檬薄纱","hex":"#FFFACD",},{"en":"PaleGodenrod","name":"灰秋麒麟","hex":"#EEE8AA",},{"en":"Khaki","name":"卡其布","hex":"#F0E68C",},{"en":"Gold","name":"金","hex":"#FFD700",},{"en":"Cornislk","name":"玉米色","hex":"#FFF8DC",},{"en":"GoldEnrod","name":"秋麒麟","hex":"#DAA520",},{"en":"FloralWhite","name":"花的白色","hex":"#FFFAF0",},{"en":"OldLace","name":"老饰带","hex":"#FDF5E6",},{"en":"Wheat","name":"小麦色","hex":"#F5DEB3",},{"en":"Moccasin","name":"鹿皮鞋","hex":"#FFE4B5",},{"en":"Orange","name":"橙色","hex":"#FFA500",},{"en":"PapayaWhip","name":"番木瓜","hex":"#FFEFD5",},{"en":"BlanchedAlmond","name":"漂白的杏仁","hex":"#FFEBCD",},{"en":"NavajoWhite","name":"Navajo白","hex":"#FFDEAD",},{"en":"AntiqueWhite","name":"古代的白色","hex":"#FAEBD7",},{"en":"Tan","name":"晒黑","hex":"#D2B48C",},{"en":"BrulyWood","name":"结实的树","hex":"#DEB887",},{"en":"Bisque","name":"(浓汤)乳脂,番茄等","hex":"#FFE4C4",},{"en":"DarkOrange","name":"深橙色","hex":"#FF8C00",},{"en":"Linen","name":"亚麻布","hex":"#FAF0E6",},{"en":"Peru","name":"秘鲁","hex":"#CD853F",},{"en":"PeachPuff","name":"桃色","hex":"#FFDAB9",},{"en":"SandyBrown","name":"沙棕色","hex":"#F4A460",},{"en":"Chocolate","name":"巧克力","hex":"#D2691E",},{"en":"SaddleBrown","name":"马鞍棕色","hex":"#8B4513",},{"en":"SeaShell","name":"海贝壳","hex":"#FFF5EE",},{"en":"Sienna","name":"黄土赭色","hex":"#A0522D",},{"en":"LightSalmon","name":"浅鲜肉(鲑鱼)色","hex":"#FFA07A",},{"en":"Coral","name":"珊瑚","hex":"#FF7F50",},{"en":"OrangeRed","name":"橙红色","hex":"#FF4500",},{"en":"DarkSalmon","name":"深鲜肉(鲑鱼)色","hex":"#E9967A",},{"en":"Tomato","name":"番茄","hex":"#FF6347",},{"en":"MistyRose","name":"薄雾玫瑰","hex":"#FFE4E1",},{"en":"Salmon","name":"鲜肉(鲑鱼)色","hex":"#FA8072",},{"en":"Snow","name":"雪","hex":"#FFFAFA",},{"en":"LightCoral","name":"淡珊瑚色","hex":"#F08080",},{"en":"RosyBrown","name":"玫瑰棕色","hex":"#BC8F8F",},{"en":"IndianRed","name":"印度红","hex":"#CD5C5C",},{"en":"Red","name":"纯红","hex":"#FF0000",},{"en":"Brown","name":"棕色","hex":"#A52A2A",},{"en":"FireBrick","name":"耐火砖","hex":"#B22222",},{"en":"DarkRed","name":"深红色","hex":"#8B0000",},{"en":"Maroon","name":"栗色","hex":"#800000",},{"en":"White","name":"纯白","hex":"#FFFFFF",},{"en":"WhiteSmoke","name":"白烟","hex":"#F5F5F5",},{"en":"Gainsboro","name":"Gainsboro","hex":"#DCDCDC",},{"en":"LightGrey","name":"浅灰色","hex":"#D3D3D3",},{"en":"Silver","name":"银白色","hex":"#C0C0C0",},{"en":"DarkGray","name":"深灰色","hex":"#A9A9A9",},{"en":"Gray","name":"灰色","hex":"#808080",},{"en":"DimGray","name":"暗淡的灰色","hex":"#696969",},{"en":"Black","name":"纯黑","hex":"#000000",}];


var app = {
	init: function(){
		var rand =  this.getRandomNum(0,136),
			co = coArr[rand],
			coId = document.getElementById('color'),
			coTit = document.getElementById('colorTit'),
			coEn = document.getElementById('colorEn');


		coId.style.backgroundColor = co.hex;
		coTit.innerText = co.name;
		coEn.innerText = co.en;

		coId.addEventListener("click", this.changeColor, false);
	},
	getRandomNum: function(Min,Max) {
		var Range = Max - Min,
			Rand = Math.random();
		return (Min + Math.round(Rand * Range));
	},
	changeColor: function(e){
		var rand =  app.getRandomNum(0,136),
			co = coArr[rand],
			coId = document.getElementById('color'),
			coTit = document.getElementById('colorTit'),
			coEn = document.getElementById('colorEn');


		coId.style.backgroundColor = co.hex;
		coTit.innerText = co.name;
		coEn.innerText = co.en;
	},
	
	

};

window.onload = function(){

	app.init();
};

(function(){
	

})();
