var startButtonEnter:Texture2D;
var startButtonExit:Texture2D;
var volumeSkin:GUISkin;
var bg:GameObject;
var hSliderValue : float = 1;

function OnMouseDown()
{
	Application.LoadLevel("RealWorld");
}

function OnGUI () 
{
	GUI.skin = volumeSkin;
	hSliderValue = GUI.HorizontalSlider (Rect (25, 25, 200, 30), hSliderValue, 0.0, 1.0);
	bg.GetComponent.<AudioSource>().volume = hSliderValue;
}
function OnMouseEnter()
{
	this.GetComponent.<GUITexture>().texture = startButtonEnter;
}
function OnMouseExit()
{
	this.GetComponent.<GUITexture>().texture = startButtonExit;
}
