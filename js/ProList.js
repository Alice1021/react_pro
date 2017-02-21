var React=require("react");
var ReactDOM=require("react-dom");
var ProList=React.createClass({
	getInitialState:function(){
		//console.log(this.props.mountType)
		return {
			mountType:this.props.mountType,
			proList:""
		}
	},
	componentWillMount:function(pageCode,linenumber){
		var that=this;
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
			dataType:"JSONP",
			success:function(data){
				var result=data;
				var data=eval(result);
				//console.log(data);
				var len=data.length;
				var arrs=[];
				for(var j=0;j<len;j++){
					arrs.push(<li key={j} data-goodsID={data[j].goodsID} data-type={that.state.mountType} className="proItem">
						<div className="proImage">
							<img src={data[j].goodsListImg} />
						</div>
						<div className="proInfo">
							<p>{data[j].goodsName}</p>
							<p><span>￥{data[j].discount==0?data[j].price:data[j].discount*data[j].price/10*1}</span><del>￥{data[j].price}</del></p>
							<p>{data[j].discount==0?"不打":data[j].discount}折</p>
							<span className="cartBtn" data-goodsID={data[j].goodsID} data-type={that.state.mountType}><i className="iconfont">&#xe602;</i></span>
						</div>
						
					</li>)
				}
				that.setState({
					proList:arrs,
					
				})
			}
		});
	},
	render:function(){
		return(
			<ul id="proList">
				{this.state.proList}
			</ul>
		)
	},
	componentDidUpdate:function(){
		var that=this;
		$(".proItem").on("click",function(){
			var goodsID=$(this).attr("data-goodsID");
			var mountType=$(this).attr("data-type");
			//console.log(goodsID)
			//alert(1)
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail goodsID={goodsID} />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader type={that.state.mountType} />,document.getElementById("header"));
			
		})
		$(".cartBtn").on("click",function(e){
			e.stopPropagation();
			var goodsID=$(this).attr("data-goodsID");
			var mountType=$(this).attr("data-type");
			//console.log(goodsID)
			//alert(2)
			if(localStorage.getItem("user")){
				var Cart=require("./Cart");
				var CartHeader=require("./CartHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<Cart goodsID={goodsID} />,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<CartHeader type={that.state.mountType} />,document.getElementById("header"));
				
			}else{
				var Login=require("./Login");
				var LoginHeader=require("./LoginHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<Login goodsID={goodsID} />,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<LoginHeader type={that.state.mountType} />,document.getElementById("header"));
			}
		})
		
	}
});
module.exports=ProList;