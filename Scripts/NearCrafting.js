var nearCrafting:boolean;
var player:GameObject;

function Awake()
{
	player = GameObject.Find("Player");
}

function OnTriggerEnter2D()
{
	nearCrafting = true;
}
function OnTriggerExit2D()
{
	nearCrafting = false;
}
function Update()
{
	player.GetComponent(Crafting).nearCrafting = nearCrafting;
	//Debug.Log(nearCrafting);
}