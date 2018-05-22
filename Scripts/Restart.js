var startButtonEnter:Texture2D;
var startButtonExit:Texture2D;
var world:String;



function OnMouseDown()
{
	Application.LoadLevel(world);
}
function OnMouseEnter()
{
	this.GetComponent.<GUITexture>().texture = startButtonEnter;
}
function OnMouseExit()
{
	this.GetComponent.<GUITexture>().texture = startButtonExit;
}
