var React=require("react");
var ReactDOM=require("react-dom");
var LoginHeader=React.createClass({
	backHandelr:function(){
			if(this.props.type=="home"||this.props.goodsID){
				var Home=require("./Home");
				var HomeHeader=require("./HomeHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<Home goodsID={this.props.goodsID}/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<HomeHeader />,document.getElementById("header"));
			}else if(this.props.type=="kind"){
				var Kind=require("./Kind");
				var KindHeader=require("./KindHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<Kind classID={this.props.classID}/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<KindHeader />,document.getElementById("header"));
			}else if(this.props.type=="detail"){
				var Detail=require("./Detail");
				var DetailHeader=require("./DetailHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<Detail classID={this.props.classID} goodsID={this.props.goodsID}  itemID={this.props.itemID}/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<DetailHeader type="list" classID={this.props.classID} itemID={this.props.itemID}/>,document.getElementById("header"));
			}	
		},
	render:function(){
		return(
			<ul className="loginHeader">
				<li className="logo" id="back" onClick={this.backHandelr}>
					<i className="iconfont">&#xe601;</i>
				</li>
				<li>
					登录
				</li>
				<li>
			
				</li>
			</ul>
		)
	}
});
module.exports=LoginHeader;
