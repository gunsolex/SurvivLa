var exitMouseEnter:Texture2D;
var exitMouseExit:Texture2D;


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
	Application.Quit();
}