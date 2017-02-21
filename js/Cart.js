var React=require("react");
var ReactDOM=require("react-dom");
var Cart=React.createClass({
    getInitialState:function(){
    	return{
    		cartListArr:"",
    		cartList:""
    	}
    },
	onHandels:function(){
		var Home=require("./Home");
		var HomeHeader=require("./HomeHeader");
		ReactDOM.unmountComponentAtNode(document.getElementById("content"));
		ReactDOM.render(<Home goodsID={this.props.goodsID}/>,document.getElementById("content"));
		ReactDOM.unmountComponentAtNode(document.getElementById("header"));
		ReactDOM.render(<HomeHeader />,document.getElementById("header"));
	},
	componentWillMount:function(){
		console.log(1)
		var that=this;
		var cartListArr=localStorage.getItem("cartListArr");
		var arr=JSON.parse(cartListArr);
//		console.log(cartListArr)
//		if(cartListArr&&arr.length!=0){
//			that.setState({
//				cartListArr:cartListArr
//			})
//    	}
  		console.log("pppp",arr);
        var len=arr.length;
        var cartLists=[];
//      var fixedList=[];
		for(var i=0;i<len;i++){
			cartLists.push(<div className="liItem" key={i}>
								<div className="listItem">
									<div className="inputs">
										<img src="img/check.png" />	 
									</div>
									<div className="pic">
									    <div className="picmin">
									    	<img src={arr[i].img}/>
									    </div>
									</div>
									<div className="text">
										<p>
											<span className="reduce" data-num={arr[i].num} data-index={i}>-</span>
											<span data-num={arr[i].num} className="num">{arr[i].num}</span>
											<span className="add" data-num={arr[i].num} data-index={i}>+</span>
										</p>
										<p>{arr[i].name}</p>
										<p>
										   <span className="price" data-price={arr[i].price}>￥{arr[i].price}</span>
										   <span className="dele" data-index={i}>删除</span>
										</p>
									</div>
								</div>
							</div>)
		}
		that.setState({
		   cartList:cartLists,
		})
	},
	render:function(){
		return(
			<div className="cartContent">
			   <div className="none">
					<div className="pic">
						<img src="img/che.jpg" />
					</div>
					<p className="p1">购物车快饿瘪了T.T</p>
					<p className="p2">主人快给我挑点宝贝吧</p>
					<button className="toLogin" onClick={this.onHandels}>去逛逛</button>
				</div>
				<div className="cartMain">
					<ul className="cartList">
						<li className="cartListItem" onClick={this.addList}>
						   {this.state.cartList}
						</li>
					</ul>
				</div>
				<div className="fixed">
					<div className="left">
		                <span>合计：</span>
		                <span>￥</span>
		                <span className="allPrice">11</span>
		                <span>不含运费</span>
		            </div>
		            <div className="right">
		                <span>结算</span>
		                <span className="allNum">(11)</span> 
		            </div>
				</div>
			</div>
		)
	},
	sum:function(){
		 var allPrice=0;
         var allNum=0;
         var len=$(".liItem").length;
		 for(var i=0;i<len;i++){
		 	var itemPrice=$(".liItem").eq(i).find(".price").attr("data-price")*1;
		 	var itemNum=$(".liItem").eq(i).find(".num").html()*1;
		 	console.log(itemPrice)
		 	allPrice+=itemPrice*itemNum;
			allNum+=$(".liItem").eq(i).find(".num").html()*1;
		 }
		 console.log(allPrice)
		 $(".allPrice").html(allPrice);
		 $(".allNum").html(allNum);
	},
	makeText:function(str,time){
		
		//吐司的封装函数
		$("#toast").show();
		$("#tip").html(str);
		setTimeout(function(){
			$("#toast").hide();
		},time);
	},
	componentDidMount:function(){
		var that=this;
//		console.log("5555",$(".liItem").length);
//		console.log(that.props.type);
		var cartListArr=localStorage.getItem("cartListArr");
		var arr=JSON.parse(cartListArr);
//		console.log("nnnn",arr);
		that.sum();
		if(cartListArr&&cartListArr!="[]"){
			$(".none").hide();
			$(".cartMain").show();
			$(".fixed").show();
		}else{
			$(".cartMain").hide();
			$(".fixed").hide();
			$(".none").show();
		}
		$(".reduce").on("tap",function(){
		   var num=$(this).attr("data-num");
		   var index=$(this).attr("data-index");
		  
		   if(arr[index].num==1){
		   	that.makeText("受不了了,不能再少了",200);
		   }else{
		   	  arr[index].num--;	
		   	  $(this).siblings(".num").html(arr[index].num);
		   }
			
		
		   localStorage.setItem("cartListArr",JSON.stringify(arr));
		   	that.sum()
		})
		$(".add").on("tap",function(){
	        var index=$(this).attr("data-index");
	        if(arr[index].num==5){
	        	that.makeText("不能多于5件",200);
	        }else{
	        	arr[index].num++;
	            $(this).siblings(".num").html(arr[index].num);
	        }
	        
	       localStorage.setItem("cartListArr",JSON.stringify(arr));
	       that.sum();
		})
		$(".dele").on("tap",function(){
			var index=$(this).attr("data-index");
			arr.splice(index,1);
			
			localStorage.setItem("cartListArr",JSON.stringify(arr));
			if($('.liItem').length==1){
				$(".none").show();
				$(".cartMain").hide();
				$(".fixed").hide()
			}
			$(this).parents(".liItem").remove();
			that.sum();
		})
		
	}
});
module.exports=Cart;
