var address = null;
var order = null;

//切换“收货地址管理”和“我的订单”
function showFunction(num){
	address = document.getElementById("address");
	order = document.getElementById("order");
	addressBtn = document.getElementById("address-btn");
	orderBtn = document.getElementById("order-btn");
	
	if(num == 0){
		addressBtn.className = "is_select";
		orderBtn.className = null;
		address.style.display = "block";
		order.style.display = "none";
	}else if(num == 1){
		orderBtn.className = "is_select";
		addressBtn.className = null;
		address.style.display = "none";
		order.style.display = "block";
	}
}
//地址管理js
function showOverlay(strID){
	var a = "overlay-"+strID;
	var b = document.getElementById(a);
	b.style.display = "block";
}
function hideOverlay(strID){
	var a = "overlay-"+strID;
	var b = document.getElementById(a);
	b.style.display = "none";
}
function hidePopForm(){
	var a = document.getElementById("address-pop");
	a.style.display = "none";
	$('.js_lb_overlay').css("display","none");
}
function addNewAddress(){
	$('#address-pop').lightbox_me({
        centered: true, 
        closeSelector:'#popClose'
    });
}