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
function chooseAddress(strID){
   var a = $("#address-list li").length;
   var b = "checkIcon-"+strID;
   var c = document.getElementById(b);
   var d = "address-item-"+strID;
   var e = document.getElementById(d);
   for( i=0; i<a; i++ ){
   	 var tmp1 = "checkIcon-"+i;
   	 var tmp2 = "address-item-"+i;
   	 var tmpItem1 = document.getElementById(tmp1);
   	 var tmpItem2 = document.getElementById(tmp2);
   	 tmpItem1.style.display = "none";
   	 tmpItem2.className = "address_item";
   }
   c.style.display = "block";
   e.className = "addresss_item address_selected";
}
//打开在线支付的box
function changeBackground(strID){
	var a = document.getElementById("arrivePay");
	var b = document.getElementById("webPay");
	var c = document.getElementById("payItem-0");
	var d = document.getElementById("payItem-1");
	var e = document.getElementById("web-pay-box");
	if(strID == '0')
	{   
		c.style.background = "#fff4d3";
		d.style.background = "#fff";
		e.style.display = "none";
	}
	else if(strID == '1'){
		c.style.background = "#fff";
		d.style.background = "#fff4d3";
		e.style.display = "block";
	}
}
//选择支付方式
function payChooseAlipay(){
	var a = document.getElementById("ali-box");
	var b = $(".bank_list li").length;
	for(i=0; i<b; i++){
		var c = "bank-"+i;
		var d = document.getElementById(c);
		d.style.border = "2px solid #fff";
	}
	a.style.border = "2px solid #ff6600";
}
function payChooseBank(strID){
	var a = document.getElementById("ali-box");
	var b = $(".bank_list li").length;
	for(i=0; i<b; i++)
	{
		var c = "bank-"+i;
		var d = document.getElementById(c);
		d.style.border = "2px solid #fff";
	}
	a.style.border = "2px solid #fff";
	var e = document.getElementById("bank-"+strID);
	e.style.border = "2px solid #ff6600";
}