//商品选择器鼠标hover效果
function addOutLine(strID_1,strID_2){
	var a = document.getElementById(strID_1);
	a.style.border = "2px solid #e3383b";
	var b = document.getElementById(strID_2);
	b.style.background = "url('../res/img/shortcut-check-22-23.png') no-repeat";
}
function removeOutLine(strID_1,strID_2){
	var a = document.getElementById(strID_1);
	if(!(a.className=="item selected")){
		a.style.border = "2px solid #ccc";
		var b = document.getElementById(strID_2);
		b.style.background = "url('../res/img/shortcut-check-hui-22-23.png') no-repeat";
	}
}
//商品类型选择，模拟单选按钮的效果
function checkItem(strID_1,strID_2,strID_3){
	//取消原有被选中的款式的样式
	var a = document.getElementsByClassName("item selected");
	var b = document.getElementsByClassName("checked");
	var d = document.getElementsByClassName("item_type_checked");
	a[0].style.border = "2px solid #ccc";
	b[0].style.background = "url('../res/img/shortcut-check-hui-22-23.png') no-repeat";
	a[0].className = "item";
	b[0].className = "unchecked";
	d[0].className = "item_type_unchecked";
	//添加点击选择的款式的样式
	var c = document.getElementById(strID_1);
	var d = document.getElementById(strID_2);
	var e = document.getElementById(strID_3);
	c.className = "item selected";
	d.className = "checked";
	e.className = "item_type_checked";
	d.style.background = "url('../res/img/shortcut-check-22-23.png') no-repeat";
}
//商品数量修改
function minus(){
	if($("#num").val() != 1)
	$("#num").val($("#num").val()-1);
	else if($("#num").val() === 1)
	$('#min').attr('disabled',"true");
}
function add(){
	var tmp = parseInt($("#num").val())+1;
	$("#num").val(tmp);
}