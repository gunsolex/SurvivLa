var name2 = ["CraftButton","BuildingButton","ContraptionsButton","DefenseButton","ToolsButton"];
var mouseOverEffects:Sprite [];
var mouseOutEffects:Sprite [];
var mouseClickEffects:Sprite [];
var mouseDown:boolean;

function OnMouseDown()
{
	mouseDown = true;
	for(var i = 0;i<name2.length;i++)
	{
		if(gameObject.name == name2[i])
		{
			gameObject.GetComponent(SpriteRenderer).sprite = mouseClickEffects[i];
		}
	}
}
function OnMouseUp()
{
	mouseDown = false;
}
function OnMouseOver()
{
	
	for(var i = 0;i<name2.length;i++)
	{
		if(gameObject.name == name2[i] && mouseDown == false)
		{
			gameObject.GetComponent(SpriteRenderer).sprite = mouseOverEffects[i];
		}
	}
}
function OnMouseExit()
{
	for(var i = 0;i<name2.length;i++)
	{
		if(gameObject.name == name2[i])
		{
			gameObject.GetComponent(SpriteRenderer).sprite = mouseOutEffects[i];
		}
	}
}
