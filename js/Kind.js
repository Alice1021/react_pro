var React=require("react");
var ReactDOM=require("react-dom");
var ProList=require("./ProList");
var Kind=React.createClass({
	getInitialState:function(){
		return{
			kindList:""
		}
	},
	componentWillMount:function(){
		var that=this;
		$.ajax({
			type:"get",
			url:"json/kind.json",
			success:function(data){
				var result=data;
				var data=eval(result);
				//console.log(data);
				var arr=[];
				var len=data.length;
				for(var i=0;i<len;i++){
					arr.push(<li key={"data"+data[i].classID} data-classID={data[i].classID} className="kindlist" data-type="kind">
			  		<img src={data[i].imgList} />
			  		<p>{data[i].name}</p>
			  	</li>)
				}
				that.setState({
					kindList:arr
				})
			}
		});
	},
	render:function(){
		return(
			<div className="kindContent">
			  <ul>
			  	{this.state.kindList}
			  </ul>
			  
			
			</div>
			
		)
	},
	componentDidUpdate:function(){
		$(".kindlist").on("tap",function(){
			var classID=$(this).attr("data-classID");
			var type=$(this).attr("data-type");
			//console.log(type);
			//console.log(classID)
			var List=require("./List");
			var ListHeader=require("./ListHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<List classID={classID} />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<ListHeader type={type} classID={classID} />,document.getElementById("header"));
			
		})
		
		
	}
});
module.exports=Kind;
