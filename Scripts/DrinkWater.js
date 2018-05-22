var player:GameObject;
var waterAmount;
var drinkingWater;
var anim:Animator;
var timer;
var emptyBottle:Sprite;
var fullBottle:Sprite;
var doubleClickTimer;
var doubleClicked;
//var dragging:boolean;

function Awake()
{
	player.GetComponent(IsometricMovement).canMove = true;
	drinkingWater = false;
	waterAmount = 0;
	timer = 1;
	doubleClickTimer = 0.2;
}

function OnMouseDown()
{
	if(waterAmount >0)
	{	
		if(doubleClicked == true)
		{
			player.GetComponent(IsometricMovement).waterCounter = player.GetComponent(IsometricMovement).initWater;
			player.GetComponent(IsometricMovement).canMove = false;
			waterAmount -=1;
			drinkingWater = true;
		}
		doubleClicked = true;
		doubleClickTimer = 0.2;
	}
	else
	{
		Debug.Log("empty bottle");
	}
}
function Update()
{
	if(doubleClicked == true)
	{
		doubleClickTimer -= Time.deltaTime;
		
	}
	if(doubleClickTimer <= 0)
	{
		doubleClicked = false;
	}
	//Debug.Log(waterAmount);
	if(drinkingWater == true)
	{
		anim.SetInteger("consuming",1);
		timer -= Time.deltaTime;
		//Debug.Log("true");
	}
	if(timer <= 0)
	{
		anim.SetInteger("consuming",0);
		player.GetComponent(IsometricMovement).canMove = true;
		drinkingWater = false;
		timer = 1;
		//eatingFood = false;
	}
	if(waterAmount == 0)
	{
		this.gameObject.GetComponent(SpriteRenderer).sprite = emptyBottle;
	}
	if(waterAmount > 0)
	{
		this.gameObject.GetComponent(SpriteRenderer).sprite = fullBottle;
	}
}