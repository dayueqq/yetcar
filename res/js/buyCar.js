//商品数量修改
function buyMinus(strID){
	var a = "num"+strID;
	var d = document.getElementById(a);
	var c = document.getElementById(a).value;
	var b = "min"+strID;
	if(c != 1)
	d.value = parseInt(c)-1;
	else if(parseInt(c) === 1)
	$(b).attr('disabled',"true");
}
function buyAdd(strID){
	var a = "num"+strID;
	var c = document.getElementById(a).value;
	var tmp = parseInt(c)+1;
	document.getElementById(a).value = tmp;
}
