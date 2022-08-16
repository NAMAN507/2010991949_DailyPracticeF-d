function findMultiplesInRange()
{
	//document.getElementById("para").innerHTML="REached in function";
	var a=document.getElementById("sp").value;
	var b=document.getElementById("el").value;
	var c=document.getElementById("k").value;

	a=Number(a);
	b=Number(b);
	c=Number(c);
	var count=0;
	let txt="";
	count =Number(count);
	for(let i=a;i<=b;i++)
	{
		if (i%c==0)
		{
			txt=txt+i+" ";
			count=count+1;
		}
	}	
	document.getElementById("para").innerHTML=count+
	"<br>"+
	"The numbers swhich are divisible by "+c+" in the given range are:-<br>"+
	txt;
}

// Enter 5digit wala
// Output range of findMultiplesInRang
// switch case wala days
// change square to circle on clicking
