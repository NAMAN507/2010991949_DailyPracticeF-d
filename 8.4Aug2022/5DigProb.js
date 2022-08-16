//Final work 
function playWithDigits()
{
	console.log("In playwith digits function ");
	var n=document.getElementById("inpu").value;
	var l=n.length;

	if(l==5)
	{
		var sum=0;
		sum=Number(sum);
		for(var i=0;i<l;i++)
		{
			sum=sum+Number(n[i]);
		}
		document.getElementById("box").style.width=(sum*5)+"px";
		document.getElementById("box").style.height=(sum*5)+"px";
		var color=document.getElementById("inpu1").value;
		document.getElementById("box").style.backgroundColor=color;
		document.getElementById("box").style.borderRadius=(sum/5)+"%";
		document.getElementById("box").style.transition="all 1s linear";
	}
	else
	{
		alert("Enter only five digits sir!!");
	}
}

let tog=1;
function toggleShapes()
{
	console.log("InToggle Function");
	if(tog==1)
	{
		document.getElementById("box").style.borderRadius="50%";
		document.getElementById("box").style.transition="border-radius 1s linear";
		tog=0;
	}
	else
	{
		document.getElementById("box").style.borderRadius="0%";
		document.getElementById("box").style.transition="border-radius 1s linear";
		tog=1;
	}
}

		//How I played and learned
// console.log("In js function");
	
// 	var a=document.getElementById("inpu").value;
// 	var c=a.length;

// 	if(c==5)
// 	{
// 		var sum=0;
// 		sum=Number(sum);
// 		for(var i=0;i<c;i++)
// 		{
// 			var temp=Number(a[i]);
// 			sum=sum+temp;	
// 		}
// 		document.getElementById("box").style.width=sum+"px";
// 		document.getElementById("box").style.height=sum+"px";
// 		document.getElementById("box").style.backgroundColor="pink";
// 		document.getElementById("box").style.transition="all 2s linear";
// 		// document.getElementById("box").setAttribute("style","width:100px");
// 		// document.getElementById("box").setAttribute("style","height:100px");
// 		// document.getElementById("box").setAttribute("style","background-color: black");
// 		// const side=document.querySelector("#box");
// 		// const csTxt=`width:sum px;`;
// 		// document.getElementById("box").innerHTML="The sum of digitd is "+ sum;
// 	}
// 	else
// 	{
// 		alert("Enter only five digit number.");
// 	}

// 	// document.getElementById("box").innerHTML="The length of entered string is " +c;