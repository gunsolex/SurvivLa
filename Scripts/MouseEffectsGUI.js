//var name2 = ["CraftButton","BuildingButton","ContraptionsButton","DefenseButton","ToolsButton"];
var mouseOverEffects:Texture2D;
var mouseOutEffects:Texture2D;
var mouseClickEffects:Texture2D;
var mouseDown:boolean;


function OnMouseUp()
{
	//Debug.Log("MDADASdsdAD");
	//mouseDown = false;
	mouseDown = false;
}
function OnMouseDown()
{
	//Debug.Log("ASDADA");
	mouseDown = true;
	this.GetComponent.<GUITexture>().texture = mouseClickEffects;
}

function OnMouseOver()
{
	
	if(mouseDown == false)
	{
		this.GetComponent.<GUITexture>().texture = mouseOverEffects;
	}
}
function OnMouseExit()
{
	
	this.GetComponent.<GUITexture>().texture = mouseOutEffects;

}
