function check(form)
{
	var a=document.getElementById("nam").value;
	var b=document.getElementById("rn").value;
	if(typeof(Storage)!== "undefined")
	{
		sessionStorage.nam=a;
		sessionStorage.rolno=b;
	}
	document.getElementById("para").innerHTML="Name is : "+sessionStorage.nam+" Roll no is : "+sessionStorage.rolno; 
}