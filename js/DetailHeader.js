var React=require("react");
var ReactDOM=require("react-dom");
var DetailHeader=React.createClass({
	backHandelr:function(){
			if(this.props.type=="home"||this.props.goodsID){
				var Home=require("./Home");
				var HomeHeader=require("./HomeHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<Home goodsID={this.props.goodsID}/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<HomeHeader />,document.getElementById("header"));
			}else if(this.props.type=="list"){
				var List=require("./List");
				var ListHeader=require("./ListHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<List classID={this.props.classID}/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<ListHeader type="kind"/>,document.getElementById("header"));
			}	
	},
	render:function(){
		return(
			<ul className="detailHeader">
				<li className="logo" id="back" onClick={this.backHandelr}>
					<i className="iconfont">&#xe601;</i>
				</li>
				<li>
					东西
				</li>
			</ul>
		)
	},
	
});
module.exports=DetailHeader;
