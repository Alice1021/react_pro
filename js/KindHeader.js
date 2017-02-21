var React=require("react");
var ReactDOM=require("react-dom");
var KindHeader=React.createClass({
	render:function(){
		return(
			<div className="kindHeader">
				<span className="iconfont">&#xe606;</span>
			   <input type="text" placeholder="搜索东西" />
			</div>
		)
	}
});
module.exports=KindHeader;
