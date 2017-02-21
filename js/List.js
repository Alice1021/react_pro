var React=require("react");
var ReactDOM=require("react-dom");
var List=React.createClass({
	getInitialState:function(){
		return{
			listItem:""	
		}
	},
	componentWillMount:function(){
		var that=this;
		if(that.props.classID=="1"){
			$.ajax({
				type:"get",
				url:"json/wclothe.json",
				data:{
					classID:that.props.classID
				},
				
				success:function(data){
					var result=data;
					var data=eval(result);
					var len=data.length;
					var arr=[];
					for(var i=0;i<len;i++){
						arr.push(<li key={"data"+data[i].item1ID} data-classID={data[i].item1ID} data-type="list" className="listItems" data-img={data[i].imgList}>
					    	<img src={data[i].imgList} />
					   		<p className="p1">{data[i].name}</p>
					   		<p className="p2">￥{data[i].price}</p>
					   		
					   	</li>)
					}
					that.setState({
						listItem:arr
					})
				}
			});
		}else if(that.props.classID=="2"){
			$.ajax({
				type:"get",
				url:"json/wshoe.json",
				data:{
					classID:that.props.classID
					
				},
				
				success:function(data){
					var result=data;
					var data=eval(result);
					var len=data.length;
					var arr=[];
					for(var i=0;i<len;i++){
						arr.push(<li key={"data"+data[i].item2ID} data-classID={data[i].item2ID} data-type="list" className="listItems">
					    	<img src={data[i].imgList} />
					   		<p className="p1">{data[i].name}</p>
					   		<p className="p2">￥{data[i].price}</p>
					   		
					   	</li>)
					}
					that.setState({
						listItem:arr
					})
				}
			});
		}else if(that.props.classID=="3"){
			$.ajax({
				type:"get",
				url:"json/mclothe.json",
				data:{
					classID:that.props.classID
					
				},
				
				success:function(data){
					var result=data;
					var data=eval(result);
					var len=data.length;
					var arr=[];
					for(var i=0;i<len;i++){
						arr.push(<li key={"data"+data[i].item3ID} data-classID={data[i].item3ID} data-type="list" className="listItems">
					    	<img src={data[i].imgList} />
					   		<p className="p1">{data[i].name}</p>
					   		<p className="p2">￥{data[i].price}</p>
					   		
					   	</li>)
					}
					that.setState({
						listItem:arr
					})
				}
			});
		}else if(that.props.classID=="4"){
			$.ajax({
				type:"get",
				url:"json/mshoe.json",
				data:{
					classID:that.props.classID
					
				},
				
				success:function(data){
					var result=data;
					var data=eval(result);
					var len=data.length;
					var arr=[];
					for(var i=0;i<len;i++){
						arr.push(<li key={"data"+data[i].item4ID} data-classID={data[i].item4ID} data-type="list" className="listItems">
					    	<img src={data[i].imgList} />
					   		<p className="p1">{data[i].name}</p>
					   		<p className="p2">￥{data[i].price}</p>
					   		
					   	</li>)
					}
					that.setState({
						listItem:arr
					})
				}
			});
		}else if(that.props.classID=="5"){
			$.ajax({
				type:"get",
				url:"json/bag.json",
				data:{
					classID:that.props.classID
					
				},
				
				success:function(data){
					var result=data;
					var data=eval(result);
					var len=data.length;
					var arr=[];
					for(var i=0;i<len;i++){
						arr.push(<li key={"data"+data[i].item5ID} data-classID={data[i].item5ID} data-type="list" className="listItems">
					    	<img src={data[i].imgList} />
					   		<p className="p1">{data[i].name}</p>
					   		<p className="p2">￥{data[i].price}</p>
					   		
					   	</li>)
					}
					that.setState({
						listItem:arr
					})
				}
			});
		}else if(that.props.classID=="6"){
			$.ajax({
				type:"get",
				url:"json/ornament.json",
				data:{
					classID:that.props.classID
					
				},
				success:function(data){
					var result=data;
					var data=eval(result);
					var len=data.length;
					var arr=[];
					for(var i=0;i<len;i++){
						arr.push(<li key={"data"+data[i].item6ID} data-classID={data[i].item6ID} data-type="list" className="listItems">
					    	<img src={data[i].imgList} />
					   		<p className="p1">{data[i].name}</p>
					   		<p className="p2">￥{data[i].price}</p>
					   		
					   	</li>)
					}
					that.setState({
						listItem:arr
					})
				}
			});
		}else if(that.props.classID=="7"){
			$.ajax({
				type:"get",
				url:"json/home.json",
				data:{
					classID:that.props.classID
					
				},
				
				success:function(data){
					var result=data;
					var data=eval(result)
					var len=data.length;
					var arr=[];
					for(var i=0;i<len;i++){
						arr.push(<li key={"data"+data[i].item7ID} data-classID={data[i].item7ID} data-type="list" className="listItems">
					    	<img src={data[i].imgList} />
					   		<p className="p1">{data[i].name}</p>
					   		<p className="p2">￥{data[i].price}</p>
					   		
					   	</li>)
					}
					that.setState({
						listItem:arr
					})
				}
			});
		}else if(that.props.classID=="8"){
			$.ajax({
				type:"get",
				url:"json/beauty.json",
				data:{
					classID:that.props.classID
					
				},
				
				success:function(data){
					var result=data;
					var data=eval(result);
					var len=data.length;
					var arr=[];
					for(var i=0;i<len;i++){
						arr.push(<li key={"data"+data[i].item8ID} data-classID={data[i].item8ID} data-type="list" className="listItems">
					    	<img src={data[i].imgList} />
					   		<p className="p1">{data[i].name}</p>
					   		<p className="p2">￥{data[i].price}</p>
					   		
					   	</li>)
					}
					that.setState({
						listItem:arr
					})
				}
			});
		}else if(that.props.classID=="9"){
			$.ajax({
				type:"get",
				url:"json/food.json",
				data:{
					classID:that.props.classID
					
				},
				
				success:function(data){
					var result=data;
					var data=eval(result);
					var len=data.length;
					var arr=[];
					for(var i=0;i<len;i++){
						arr.push(<li key={"data"+data[i].item9ID} data-classID={data[i].item9ID} data-type="list" className="listItems">
					    	<img src={data[i].imgList} />
					   		<p className="p1">{data[i].name}</p>
					   		<p className="p2">￥{data[i].price}</p>
					   		
					   	</li>)
					}
					that.setState({
						listItem:arr
					})
				}
			});
		}else if(that.props.classID=="10"){
			$.ajax({
				type:"get",
				url:"json/digital.json",
				data:{
					classID:that.props.classID
					
				},
				
				success:function(data){
					var result=data;
					var data=eval(result);
					var len=data.length;
					var arr=[];
					for(var i=0;i<len;i++){
						arr.push(<li key={"data"+data[i].item10ID} data-classID={data[i].item10ID} data-type="list" className="listItems">
					    	<img src={data[i].imgList} />
					   		<p className="p1">{data[i].name}</p>
					   		<p className="p2">￥{data[i].price}</p>
					   		
					   	</li>)
					}
					that.setState({
						listItem:arr
					})
				}
			});
		}else if(that.props.classID=="11"){
			$.ajax({
				type:"get",
				url:"json/sport.json",
				data:{
					classID:that.props.classID
					
				},
				
				success:function(data){
					var result=data;
					var data=eval(result);
					var len=data.length;
					var arr=[];
					for(var i=0;i<len;i++){
						arr.push(<li key={"data"+data[i].item11ID} data-classID={data[i].item11ID} data-type="list" className="listItems">
					    	<img src={data[i].imgList} />
					   		<p className="p1">{data[i].name}</p>
					   		<p className="p2">￥{data[i].price}</p>
					   		
					   	</li>)
					}
					that.setState({
						listItem:arr
					})
				}
			});
		}else if(that.props.classID=="12"){
			$.ajax({
				type:"get",
				url:"json/gift.json",
				data:{
					classID:that.props.classID
					
				},
				
				success:function(data){
					var result=data;
					var data=eval(result);
					var len=data.length;
					var arr=[];
					for(var i=0;i<len;i++){
						arr.push(<li key={"data"+data[i].item12ID} data-classID={data[i].item12ID} data-type="list" className="listItems">
					    	<img src={data[i].imgList} />
					   		<p className="p1">{data[i].name}</p>
					   		<p className="p2">￥{data[i].price}</p>
					   		
					   	</li>)
					}
					that.setState({
						listItem:arr
					})
				}
			});
		}else if(that.props.classID=="13"){
			$.ajax({
				type:"get",
				url:"json/use.json",
				data:{
					classID:that.props.classID
					
				},
				
				success:function(data){
					var result=data;
					var data=eval(result);
					var len=data.length;
					var arr=[];
					for(var i=0;i<len;i++){
						arr.push(<li key={"data"+data[i].item13ID} data-classID={data[i].item13ID} data-type="list" className="listItems">
					    	<img src={data[i].imgList} />
					   		<p className="p1">{data[i].name}</p>
					   		<p className="p2">￥{data[i].price}</p>
					   		
					   	</li>)
					}
					that.setState({
						listItem:arr
					})
				}
			});
		}
		
		
	},
	render:function(){
		return(
			
			<div className="listContent">
			   <ul>
				   	{this.state.listItem}
			   </ul>
			</div>
			
			
		)
	},
	componentDidUpdate:function(){
		var that=this;
		$(".listItems").on("tap",function(){
			
			var itemID=$(this).attr("data-classID");
			var type=$(this).attr("data-type");
			var img=$(this).attr("data-img");
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail classID={that.props.classID} itemID={itemID} img={img}/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader type={type} classID={that.props.classID} />,document.getElementById("header"));
			
		})
		
		
	}
});
module.exports=List;
