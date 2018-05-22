var rain:GameObject;
var pondQuantity;
var player:GameObject;
var name1:String;
var collectWaterKey:KeyCode;
var insideMe:boolean;
var refilled:boolean;
var waterBottle:GameObject;
var pondEmpty:Sprite;
var pondFull:Sprite;

function Awake()
{
	pondQuantity = 0;
	name1 = gameObject.name;
	refilled = false;
}

function OnTriggerEnter2D()
{
	insideMe = false;
	
	if(pondQuantity > 0)
	{
		insideMe = true;
		
	}
	//Debug.Log("inside");
}
function OnTriggerExit2D()
{
	insideMe = false;
	
}

function Update () 
{
	//Debug.Log(insideMe);
	var rainCheck = rain.GetComponent(Rain).rainCheck;
	if(rainCheck == 1 && refilled == false)
	{
		pondQuantity = 3;
		refilled = true;
		//Debug.Log("RAINING");
		this.gameObject.GetComponent(SpriteRenderer).sprite = pondFull;
	}
	if(rainCheck == 0)
	{
		refilled = false;
	}
	if(Input.GetKeyDown(collectWaterKey) && insideMe == true && pondQuantity>0)
	{
		pondQuantity -=1;
		//Debug.Log(pondQuantity);
		waterBottle.GetComponent(DrinkWater).waterAmount = 2;
	}
	if(pondQuantity == 0)
	{
		this.gameObject.GetComponent(SpriteRenderer).sprite = pondEmpty;
	}
}