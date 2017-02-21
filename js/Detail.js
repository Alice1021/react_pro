var React=require("react");
var ReactDOM=require("react-dom");
var Detail=React.createClass({
	getInitialState:function(){
		return {
			listItems:"",
			detailList:""
		}
	},
	componentWillMount:function(){
		var that=this;
		var goodsID=this.props.goodsID;
		var classID=this.props.classID;
		var itemID=this.props.itemID;
		if(goodsID){			
			$.ajax({
				type:"get",
				url:"json/shouye.json",
				success:function(data){
					var result=data;
					var data=eval(result);
					var lens=data.length;
					var id=goodsID*1;
					var arr=[];
					for(var j=0;j<lens;j++){
						j=id;
						arr.push(
						<div className="detailList" key={"data"+data[id-1].id}>
							<div className="pic" >
								<img src={data[id-1].imgList} />
							</div>
							<div className="p1">{data[id-1].name}</div>
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
								<span className="span3"  data-type="detail" data-img={data[id-1].imgList} data-name={data[id-1].name} data-price={data[id-1].price}>
									  <span className="iconfont">&#xe602;</span>
									  <span>去购买 </span>
									  <span>782 </span>
								</span>
							</p>
							<div className="price">￥{data[id-1].price}</div>
						</div>
						)
					break;
					}
					that.setState({
						detailList:arr
					});
				}
			})
		}
		else{
			var url="";
			//console.log(classID);
			var jsonArr=["json/wclothe.json","json/wshoe.json",
			             "json/mclothe.json","json/mshoe.json",
			             "json/bag.json","json/ornament.json",
			             "json/home.json","json/beauty.json",
			             "json/food.json","json/digital.json",
			             "json/sport.json","json/gift.json",
			             "json/use.json"];
			url=jsonArr[classID*1-1]
			console.log(url)
				$.ajax({
					type:"get",
					url:url,
					data:{
						"itemID":itemID
					},
					success:function(data){
						var result=data;
						var data=eval(result);
						//console.log(data);
						var len=data.length;
						var id=itemID*1;
						//console.log(itemID);
						var arr=[];
						for(var i=0;i<len;i++){
							i=itemID;
							arr.push(<div className="detailList" key={data[id-1].name}>
								<div className="pic">
									<img src={data[id-1].imgList} />
								</div>
								<div className="p1">{data[id-1].name}</div>
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
									<span className="span3" data-type="detail" data-img={data[id-1].imgList} data-name={data[id-1].name} data-price={data[id-1].price}>
										  <span className="iconfont">&#xe602;</span>
										  <span>去购买 </span>
										  <span>782 </span>
									</span>
								</p>
								<div className="price">￥{data[id-1].price}</div>
							</div>
									)
									break;
								}
								that.setState({
									detailList:arr
								});
							}
						})
						
						
			};
		
	},
	render:function(){
		return(
			<div className="detailContent">
				{this.state.detailList}
				<ul className="chatText">
					<li>
						<p className="pp1">
							<span className="span1">
								<img src="img/head (1).jpg" />
							</span>
							<span className="span2">谵台千夜</span>
							<span className="span4" ><img src="img/not_useful.png" /></span>
						</p>
						<p className="pp2">着走起来蛮舒服的</p>
					</li>
				</ul>
				<ul className="moreList">
					<li>
				    	<img src="img/wclothe (11).jpg" />
				   		<p className="p1">2016新品特价韩版修身加厚显瘦长款羽绒棉衣女加大棉服外套潮</p>
				   		<p className="p2">￥520</p>
				   	</li>
				   	<li>
				    	<img src="img/wclothe (12).jpg" />
				   		<p className="p1">2016新品特价韩版修身加厚显瘦长款羽绒棉衣女加大棉服外套潮</p>
				   		<p className="p2">￥520</p>
				   	</li>
				   	<li>
				    	<img src="img/wclothe (13).jpg" />
				   		<p className="p1">2016新品特价韩版修身加厚显瘦长款羽绒棉衣女加大棉服外套潮</p>
				   		<p className="p2">￥520</p>
				   	</li>
				   	<li>
				    	<img src="img/wclothe (14).jpg" />
				   		<p className="p1">2016新品特价韩版修身加厚显瘦长款羽绒棉衣女加大棉服外套潮</p>
				   		<p className="p2">￥520</p>
				   	</li>
				   	<li>
				    	<img src="img/wclothe (15).jpg" />
				   		<p className="p1">2016新品特价韩版修身加厚显瘦长款羽绒棉衣女加大棉服外套潮</p>
				   		<p className="p2">￥520</p>
				   	</li>
				   	<li>
				    	<img src="img/wclothe (16).jpg" />
				   		<p className="p1">2016新品特价韩版修身加厚显瘦长款羽绒棉衣女加大棉服外套潮</p>
				   		<p className="p2">￥520</p>
				   	</li>
				   	<li>
				    	<img src="img/wclothe (1).jpg" />
				   		<p className="p1">2016新品特价韩版修身加厚显瘦长款羽绒棉衣女加大棉服外套潮</p>
				   		<p className="p2">￥520</p>
				   	</li>
				   	<li>
					    <img src="img/wclothe (2).jpg" />
						<p className="p1">2016新品特价韩版修身加厚显瘦长款羽绒棉衣女加大棉服外套潮</p>
						<p className="p2">￥520</p>
					</li>
				</ul>
			</div>
		)
	},
	
	makeText:function(str,time){
		
		//吐司的封装函数
		$("#toast").show();
		$("#tip").html(str);
		setTimeout(function(){
			$("#toast").hide();
		},time);
	},
	componentDidUpdate:function(evt){	
		//console.log(1)
		var that=this;
		var content = document.getElementById("content");
		var header=document.getElementById("header");
		$(".span3").on("tap",function(evt){
			evt.preventDefault();
			evt.stopPropagation();
			var type=$(this).attr("data-type");
			var name=$(this).attr("data-name");
			if(localStorage.getItem("userID")){
				var img=$(this).attr("data-img");
				var name=$(this).attr("data-name");
				var price=$(this).attr("data-price");
				console.log("img",img);
				console.log("name",name);
				console.log("price",price);				
				if(localStorage.getItem("cartListArr")&&localStorage.getItem("cartListArr")!="[]"){					
					//var cartListArr=[];
				    var  cartListArr=JSON.parse(localStorage.getItem("cartListArr"));
					var len=cartListArr.length;
					for(var i=0;i<len;i++){ 
						if(cartListArr[i].img==img){							
							cartListArr[i].num++;
							break;
						}else if(cartListArr[i].img!=img&&i==len-1){
							var obj={
								"img":img,
								"name":name,
								"price":price,
								"num":1
							};
							cartListArr.push(obj);
						}
					}
				  localStorage.setItem("cartListArr",JSON.stringify(cartListArr));
				  //console.log("bbbbbb",JSON.parse(localStorage.getItem("cartListArr")));
				}else{
					var cartListArr=[];
					var obj={
						"img":img,
						"name":name,
						"price":price,
						"num":1
					}
				  cartListArr.push(obj);
				  localStorage.setItem("cartListArr",JSON.stringify(cartListArr));
				 // console.log("aaaa",JSON.parse(localStorage.getItem("cartListArr")));
				}
				that.makeText("成功加入购物车",2000);
			}else{
				var Login=require("./Login");
				var LoginHeader=require("./LoginHeader")
			    ReactDOM.unmountComponentAtNode(header);
				ReactDOM.render(<LoginHeader type={type} classID={that.props.classID} goodsID={that.props.goodsID}  itemID={that.props.itemID} type="detail"/>,header);
				ReactDOM.unmountComponentAtNode(content);
				ReactDOM.render(<Login classID={that.props.classID} goodsID={that.props.goodsID} itemID={that.props.itemID}/>,content);
			}
			
		})

	}	
});
module.exports=Detail;
