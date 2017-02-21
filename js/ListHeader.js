var React=require("react");
var ReactDOM=require("react-dom");
var ListHeader=React.createClass({
	backHandelr:function(){
//			console.log(this.props.type)
			if(this.props.type=="home"){
				var Home=require("./Home");
				var HomeHeader=require("./HomeHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<Home />,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<HomeHeader />,document.getElementById("header"));
			}else if(this.props.type=="kind"){
				var Kind=require("./Kind");
				var KindHeader=require("./KindHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<Kind />,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<KindHeader />,document.getElementById("header"));
			}	
	},
	render:function(){
		return(
			
			<ul className="detailHeader">
				<li className="logo" id="back" onClick={this.backHandelr}>
					<i className="iconfont">&#xe601;</i>
				</li>
				<li>
					列表
				</li>
				
			</ul>
			
			
		)
	}
});
module.exports=ListHeader;
