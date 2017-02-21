var React=require("react");
var ReactDOM=require("react-dom");
var MainFooter=React.createClass({
	getInitialState:function(){
		return{
			activeIndex:0,
		}
	},
	clickListHandels:function(e){
		//console.log(e.target.getAttribute("data-id"))
		var currentIndex=e.target.getAttribute("data-id")*1;
		this.setState({
			activeIndex:currentIndex
		});
		var content = document.getElementById("content");
		var header=document.getElementById("header");
		switch(currentIndex){
			case 0:
			    var Home=require("./Home");
			    var HomeHeader=require("./HomeHeader")
			    ReactDOM.unmountComponentAtNode(header);
				ReactDOM.render(<HomeHeader/>,header);
			    ReactDOM.unmountComponentAtNode(content);
				ReactDOM.render(<Home/>,content);
				break;
			case 1:
				var Kind=require("./Kind");
				var KindHeader=require("./KindHeader")
			    ReactDOM.unmountComponentAtNode(header);
				ReactDOM.render(<KindHeader/>,header);
				ReactDOM.unmountComponentAtNode(content);
				ReactDOM.render(<Kind/>,content);
				break;
			case 2:
				var Cart=require("./Cart");
				var CartHeader=require("./CartHeader")
			    ReactDOM.unmountComponentAtNode(header);
				ReactDOM.render(<CartHeader/>,header);
				ReactDOM.unmountComponentAtNode(content);
				ReactDOM.render(<Cart/>,content);
				break;
			default:
				break;	
		}
	},
	render:function(){
		return(
			<ul>
				<li className={this.state.activeIndex==0?"active":""} onClick={this.clickListHandels} data-id="0">
					<i className="iconfont active" data-id="0">&#xe67d;</i>
					<p data-id="0">发现东西</p>
				</li>
				<li className={this.state.activeIndex==1?"active":""} onClick={this.clickListHandels} data-id="1">
					<i className="iconfont" data-id="1">&#xe694;</i>
					<p data-id="1">搜索东西</p>
				</li>
				<li className={this.state.activeIndex==2?"active":""} onClick={this.clickListHandels} data-id="2">
					<i className="iconfont" data-id="2">&#xe629;</i>
					<p data-id="2">购物车</p>
				</li>
			</ul>
		)
	}
});
module.exports=MainFooter;
