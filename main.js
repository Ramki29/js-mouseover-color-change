let contain=document.getElementById("container");
let inputs=document.createElement("input");
	inputs.setAttribute("id","color");
	contain.appendChild(inputs);
	
inputs.addEventListener("mouseover",function(){
	let colors=document.getElementById("color").value;
	console.log(colors);
	inputs.style.color=colors;
});