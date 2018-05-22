var popUpKey:KeyCode;
var checkPress:Number;
var volumeSkin:GUISkin;
var hSliderValue : float = 1;
var bg:GameObject;
var exitMouseEnter:Texture2D;
var exitMouseExit:Texture2D;
var exitMouseClick:Texture2D;


function Awake()
{
	GetComponent.<GUITexture>().enabled = false;
	checkPress = 1;
	
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

function OnMouseEnter()
{
	this.GetComponent.<GUITexture>().texture = exitMouseEnter;
}

function OnMouseExit()
{
 	this.GetComponent.<GUITexture>().texture = exitMouseExit;
}


function OnMouseDown()
{
	this.GetComponent.<GUITexture>().texture = exitMouseClick;
	Application.LoadLevel("Menu");

}
		
function OnGUI () 
{
	if(checkPress == -1)
	{
		GUI.skin = volumeSkin;
		hSliderValue = GUI.HorizontalSlider (Rect (25, 25, 200, 30), hSliderValue, 0.0, 1.0);
		bg.GetComponent.<AudioSource>().volume = hSliderValue;
	}

}