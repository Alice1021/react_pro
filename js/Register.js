var React=require("react");
var ReactDOM=require("react-dom");
var Register=React.createClass({
	loginHandel:function(){
		var that=this;
//		alert(1);
		var name=$(".text1").val();
		var passWorld=$(".text2").val();
		var passWorld2=$(".text3").val();
//		alert(333);
		
		if(name==""){
			
			that.makeText("用户名不能为空",600);
//			alert("用户名不能为空");

		}else if(passWorld==""){
			that.makeText("密码不能为空",600);
//			alert("密码不能为空");
		}else if(passWorld2==""){
			that.makeText("重复密码不能为空",600);
//			alert("密码不能为空");
		}else if(name&&passWorld&&passWorld2){
			localStorage.setItem("userID",name);
			localStorage.setItem("password",passWorld);
			that.makeText("恭喜您，注册成功",600);
		}
		
		//alert("恭喜您，注册成功");
	},
	makeText:function(str,time){
		
		//吐司的封装函数
		$("#toast").show();
		$("#tip").html(str);
		setTimeout(function(){
			$("#toast").hide();
		},time);
	},
	render:function(){
		return(
			
			<div className="registerContent">
				<div className="registerMain">
				   <div className="registers">
				   	   <span>欢迎注册</span>
				   </div>
				    <div className="inputText1">
				   	
				   		账户<input type="text" placeholder="手机号/邮箱/会员名" className="text1"/>
				   	</div>
				   	<div className="inputText2">
				   		登录密码<input type="passworld" placeholder="请输入密码" className="text2"/>
				   	</div>
				   	<div className="inputText3">
				   		确认密码<input type="passworld" placeholder="请输入密码" className="text3"/>
				   	</div>
				   	<button className="btn" onClick={this.loginHandel}>注册</button>
				   	
				</div>
				
			</div>
			
			
		)
	}
});
module.exports=Register;
