function checkEmailWritten(){
	if(!document.getElementById('email_input'))
		return;
	var email_input = document.getElementById('email_input');
	email_input.onblur = function(){
		var email = this.value;
		var email_reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-])+/;
		if(email_reg.test(email)){
			return;
		}else{
			this.value = "";
			this.placeholder='邮箱格式不正确，请重新输入';
		}	
	}

}

function checkNameNotExisted(){
	if(!document.getElementById('name_input')) return;
	var name_input = document.getElementById('name_input');
	name_input.onblur = function(){
		var xhr = new XMLHttpRequest();
		var that = this;
		xhr.open("GET","/checkname/"+this.value,true);
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if(xhr.status == 200){
					if(xhr.responseText == 'no'){
						that.value = "";
						that.placeholder = '用户名已存在';
					}
				}
			}
		}
		xhr.send();
	}
	
}

window.onload = function(){
	checkEmailWritten();
	checkNameNotExisted();
}