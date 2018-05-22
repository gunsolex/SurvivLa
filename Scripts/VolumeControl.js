var checkPress = 1;
var volumeSkin:GUISkin;
var hSliderValue : float = 1;
var bg:GameObject;

function OnMouseDown()
{
	checkPress *= -1;
}	


function OnGUI () 
{
	if(checkPress == -1)
	{
		GUI.skin = volumeSkin;
		hSliderValue = GUI.HorizontalSlider (Rect (200, 700, 200, 30), hSliderValue, 0.0, 1.0);
		bg.GetComponent.<AudioSource>().volume = hSliderValue;
	}

}