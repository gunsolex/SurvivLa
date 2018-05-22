//var name2 = ["CraftButton","BuildingButton","ContraptionsButton","DefenseButton","ToolsButton"];
var mouseOverEffects:Sprite;
var mouseOutEffects:Sprite;
var mouseClickEffects:Sprite;
var mouseDown:boolean;


function OnMouseUp()
{
	//Debug.Log("MDADASdsdAD");
	mouseDown = false;
}
function OnMouseDown()
{
	//Debug.Log("ASDADA");
	mouseDown = true;
	gameObject.GetComponent(SpriteRenderer).sprite = mouseClickEffects;
}

function OnMouseOver()
{
	
	if(mouseDown == false)
	{
		gameObject.GetComponent(SpriteRenderer).sprite = mouseOverEffects;
	}
}
function OnMouseExit()
{
	
	gameObject.GetComponent(SpriteRenderer).sprite = mouseOutEffects;

}
