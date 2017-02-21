var React=require("react");
var ReactDOM=require("react-dom");
var MainFooter=require("./js/MainFooter");
var Home=require("./js/Home");
var HomeHeader=require("./js/HomeHeader");
var Main=React.createClass({
	render:function(){
		return(
			<div className="rootBox">
			   <header id="header">header</header>
			   <section id="content"></section>
			   <footer id="footer"></footer>
			</div>
			
		)
	}
	
});
ReactDOM.render(<Main/>,document.getElementById("app"));
ReactDOM.render(<HomeHeader/>,document.getElementById("header"));
ReactDOM.render(<Home/>,document.getElementById("content"));
ReactDOM.render(<MainFooter/>,document.getElementById("footer"));





