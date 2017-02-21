var React=require("react");
var ReactDOM=require("react-dom");
var ProList=require("./ProList");
var Home=React.createClass({
	getInitialState:function(){
		return{
			
			imgsList:"",
			proList:""
			
		}
	},

	componentWillMount:function(){
		var that=this;
		$.ajax({
			type:"get",
			url:"json/shouye.json",
			success:function(data1){
				var result=data1;
				var data1=eval(result);
				var len=data1.length;
				var arrs=[];
				console.log("home",data1);
				for(var j=0;j<len;j++){
					arrs.push(<li key={j} data-goodsID={data1[j].id} data-type="home" className="proItem">
						<p className="p1">
							<img src={data1[j].imgList} />
						</p>
						<p>
							<span>
								<img src={data1[j].img2} />
							</span>
							<span>{data1[j].name}</span>
							<span>评论</span>
						</p>
						<p>
							{data1[j].produce}
						</p>
						<p className="min">
							<span className="span1">
								  <span><img src="img/like.png"/> </span>
								  <span>喜欢 </span>
								  <span>782 </span>
							</span>
							<span className="span2">
								  <span><img src="img/jia.png"/> </span>
								  <span>加入豆列</span>
								  <span>782 </span>
							</span>
							<span className="span3">
								  <span><img src="img/ping.png"/>  </span>
								  <span>评论 </span>
								  <span>782 </span>
							</span>
						</p>
						<p>
							<span>{data1[j].name}</span>
							<span>￥{data1[j].price}</span>
						</p>
					</li>)
				}
				that.setState({
					proList:arrs
				})
			}
		});
	},
	render:function(){
		return(
			<div className="homeContent">
			    <ul className="swiper-container">
				    <li>
				    	<img src="img/pic1.jpg" />
				    </li>
				    <li>
				    	<img src="img/pic2.jpg" />
				    </li>
				    <li>
				    	<img src="img/pic3.jpg" />
				    </li>
				    <li>
				    	<img src="img/pic4.jpg" />
				    </li>
				</ul>
				<ul className="homeList">
					{this.state.proList}
				</ul>
			</div>
		)
	},
	componentDidUpdate:function(){
		var mySwiper = new Swiper ('.swiper-container', {
		   "pagination":".swiper-pagination",
			autoplay:2000,
		    loop: true,
		    autoplayDisableOnInteraction:false

 		}) 
 		$(".proItem").on("tap",function(){
			var goodsID=$(this).attr("data-goodsID");
			var type=$(this).attr("data-type");
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail goodsID={goodsID} type={type}/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader  type={type} goodsID={goodsID}/>,document.getElementById("header"));
			
		})
 		$(".swiper-container").on("tap",function(){
   			var Kind=require("./Kind");
			var KindHeader=require("./KindHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Kind />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<KindHeader  />,document.getElementById("header"));
 			
 		})
		
	}
			
});
module.exports=Home;