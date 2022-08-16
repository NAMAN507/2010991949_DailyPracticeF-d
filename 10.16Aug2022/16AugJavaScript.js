function check(myform)
{
	if(myform.myname.value=="" || myform.myname.value==null)
	{
		alert("Name is mandatory!");
		return false;
	}
	else if(myform.myphone.value=="" || myform.myphone.value==null)
	{
		alert("Phone number is mandatory!");
		return false;
	}
	else
	{
		var reg=/[^0-9]/;
		//var reg1=/[a-zA-Z]+$/;
		if(myform.myphone.value.length!=10)
		{
			alert("The length of phone number must be 10");
			return false;
		}
		else if(reg.test(myform.myphone.value)==true)
		{
			alert("Phone number must not contain any characters");
			return false;
		}
		return true;
	}
}