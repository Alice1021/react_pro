var React=require("react");
var ReactDOM=require("react-dom");
var RegisterHeader=React.createClass({
	backHandelr:function(){
		if(this.props.type=="login"){
			var Login=require("./Login");
			var LoginHeader=require("./LoginHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Login classID={this.props.classID} goodsID={this.props.goodsID} itemID={this.props.itemID}/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<LoginHeader type="detail" classID={this.props.classID} goodsID={this.props.goodsID} itemID={this.props.itemID}/>,document.getElementById("header"));
		}
	},
	render:function(){
		return(
			<ul className="registerHeader">
				<li className="logo" id="back" onClick={this.backHandelr}>
					<i className="iconfont">&#xe601;</i>
				</li>
				<li>
					注册
				</li>
				<li>
			
				</li>
			</ul>
		)
	}
});
module.exports=RegisterHeader;
