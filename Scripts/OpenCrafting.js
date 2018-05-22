var openCrafting:boolean;
var opened:Number;
var craftingKey:KeyCode;
var player:GameObject;

function Awake()
{
	openCrafting = false;
	opened = 1;
}
function OnMouseDown()
{
	if(opened == 1)
	{
		openCrafting = true;
		opened *= -1;
	}
	else if(opened == -1)
	{
		openCrafting = false;
		opened *= -1;
	}
}
function Update () 
{
	player.GetComponent(Crafting).openCrafting2 = openCrafting;
	if(Input.GetKeyDown(craftingKey) && opened == 1)
	{
		openCrafting = true;
		opened *= -1;
	}
	else if(Input.GetKeyDown(craftingKey) && opened == -1)
	{
		openCrafting = false;
		opened *= -1;
	}

}