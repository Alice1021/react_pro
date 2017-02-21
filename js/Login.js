var React=require("react");
var ReactDOM=require("react-dom");
var Login=React.createClass({
	
	clickHandels:function(){
		$(".loginMain").css("display","none");
		$(".none").css("display","block");
	},
	onHandels:function(){
		$(".loginMain").css("display","block");
		$(".none").css("display","none");
	},
	loginHandel:function(){
		var name=$(".text1").val();
		var password=$(".text2").val();
		if(localStorage.getItem("userID")==name&&localStorage.getItem("password")==password){
			localStorage.setItem("login","ok");
			alert("登陆成功")
			var Cart=require("./Cart");
			var CartHeader=require("./CartHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Cart classID={this.props.classID} goodsID={this.props.goodsID} itemID={this.props.itemID}/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<CartHeader type="login" classID={this.props.classID} goodsID={this.props.goodsID} itemID={this.props.itemID}/>,document.getElementById("header"));
			
		}else{
			alert("亲，您的账号输入有误")
		}
	},
	registerHandel:function(){
		var Register=require("./Register");
		var RegisterHeader=require("./RegisterHeader");
		ReactDOM.unmountComponentAtNode(document.getElementById("content"));
		ReactDOM.render(<Register classID={this.props.classID} goodsID={this.props.goodsID} itemID={this.props.itemID}/>,document.getElementById("content"));
		ReactDOM.unmountComponentAtNode(document.getElementById("header"));
		ReactDOM.render(<RegisterHeader type="login" classID={this.props.classID} goodsID={this.props.goodsID} itemID={this.props.itemID}/>,document.getElementById("header"));
	},
	render:function(){
		return(
			<div className="loginContent">
				<div className="loginMain">
				   <div className="logins">
				   	   <span>您需要继续登录才能继续访问</span>
				   	   <span className="guanbi" onClick={this.clickHandels}>关闭</span>
				   </div>
				    <div className="inputText1">
				   		账户<input type="text" placeholder="手机号/邮箱/会员名" className="text1"/>
				   	</div>
				   	<div className="inputText2">
				   		登录密码<input type="passworld" placeholder="请输入密码" className="text2"/>
				   	</div>
				   	<button className="btn" onClick={this.loginHandel}>登录</button>
				   	<button className="toregister" onClick={this.registerHandel}>免费注册</button>
				</div>
				<div className="none">
					<div className="pic">
						<img src="img/che.jpg" />
					</div>
					<p className="p1">登录账号才能看到购物车哦</p>
					<p className="p2">登录失效</p>
					<button className="toLogin" onClick={this.onHandels}>马上登录</button>
				</div>
			</div>
			
			
		)
	},
	componentDidUpdate:function(){
		
	}
});
module.exports=Login;
