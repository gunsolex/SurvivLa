var bg:GameObject;
var hSliderValue : float = 1;
var check:boolean;
var popUpKey:KeyCode;
var checkPress:Number;


function Awake()
{
	check = true;
	checkPress = 1;
	GetComponent.<GUITexture>().enabled = false;
}

function OnMouseDown()
{
	if(check)
	{
		bg.GetComponent.<AudioSource>().Stop();
		check = false;
	}
	if(check == false)
	{
		bg.GetComponent.<AudioSource>().Play();
		check = true;
	}
}


function Update()
{
	if(Input.GetKeyDown(popUpKey) && checkPress == 1)
	{
		GetComponent.<GUITexture>().enabled = true;
		checkPress *= -1;
		
	}
	else if(Input.GetKeyDown(popUpKey) && checkPress == -1)
	{
		GetComponent.<GUITexture>().enabled = false;
		checkPress *= -1;
		
	}
}




