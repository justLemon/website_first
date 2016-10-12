//alert(window.innerWidth+","+window.navigator.appVersion);
function changeToLeft(){
	var source=$("#placeholder").attr('src');
	var i=parseInt(source.match(/\d/));
	if(i==4){
		i=1;
	}
	else
		i=i+1;
	$("#picture"+i).focus();
	source='images/banner'+i+'.jpg';
	$("#placeholder").attr('src',source);
	
}
function changeToRight(){

}

function changeToId(ids){
	var source="";
	switch(ids){

		case "picture1":source="images/banner1.jpg";break;
		case "picture2":source="images/banner2.jpg";break;
		case "picture3":source="images/banner3.jpg";break;
		case "picture4":source="images/banner4.jpg";break;
		default:return false;

	}
	$("#placeholder").attr('src',source);
}



$(document).ready(function(){
	

	//rightButton.addEventListener("click",changeToRight);
	$("#leftButton").click(function(){
		var source=$("#placeholder").attr('src');
		var i=parseInt(source.match(/\d/));
		if(i==1){
			i=4;
		}
		else
			i=i-1;
		$("#picture"+i).focus();
		source='images/banner'+i+'.jpg';
		$("#placeholder").attr('src',source);

	});
	$("#rightButton").click(function(){
		var source=$("#placeholder").attr('src');
		var i=parseInt(source.match(/\d/));
		if(i==4){
			i=1;
		}
		else
			i=i+1;
		$("#picture"+i).focus();
		source='images/banner'+i+'.jpg';
		$("#placeholder").attr('src',source);
		
	});
	$("#picture1").click(function(){
		changeToId(this.id);
		
	});
	$("#picture2").click(function(){
		changeToId(this.id);
		
	});
	$("#picture3").click(function(){
		changeToId(this.id);
		
	});
	$("#picture4").click(function(){
		changeToId(this.id);
		
	});

	$("#picture1").focus();
});