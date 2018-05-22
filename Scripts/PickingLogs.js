var insideMe:boolean;
var name1:String;
var player:GameObject;
var deathCheck:boolean;
var playerPosition;
var insideBerry:boolean;
var insideBamboo:boolean;
var treeHealth:Number;
var cutTree:KeyCode;
var timer;
var startTime:boolean;
var insidePalmTree:boolean;
var waterBottle:GameObject;

function Awake()
{
	player = GameObject.Find("Player");
 	name1 = gameObject.name;
 	deathCheck = false;
 	playerPosition = 0;
 	timer = 0.5;
 	startTime = false;
}

function OnTriggerEnter2D()
{
	insideMe = true;
	player.GetComponent(Inventory).itemName = name1;
	player.GetComponent(Inventory).nearItem = insideMe;
	/*playerPosition = player.transform.position.y - this.transform.position.y;
	Debug.Log(playerPosition);
	if(playerPosition>=0 && playerPosition != 0)
	{
		player.renderer.sortingOrder = 0;
		Debug.Log("behind");
	}
	else if(playerPosition <=-1.5 && playerPosition != 0)
	{
		player.renderer.sortingOrder = 1;
		Debug.Log("front");
	}*/
	//Debug.Log(this.transform.position.y);
	//Destroy(this.gameObject);
	//Debug.Log(insideMe);
	
}
function OnTriggerExit2D()
{
	insideMe = false;
	player.GetComponent(Inventory).itemName = name1;
	//Debug.Log(insideMe);
}
function Update()
{
	
	
	if(insideMe == true)
	{
		deathCheck = player.GetComponent(Inventory).deathCheck;
	}
	/*if(insideMe == true && deathCheck == true && insideBerry == false && treeHealth == 0 && insidePalmTree == true)
	{
		Debug.Log("PALMING");
		waterBottle.GetComponent(DrinkWater).waterAmount = 2;
		Destroy(this.gameObject);
	}*/
	if(insideMe == true && deathCheck == true)
	{
		//Debug.Log(this);
		Destroy(this.gameObject);
	}
	
	
}
