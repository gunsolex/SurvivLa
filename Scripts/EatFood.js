var player:GameObject;
var anim:Animator;
var eatingFood:boolean;
var timer;
var doubleClickTimer;
var doubleClicked;



function Awake()
{
	player.GetComponent(IsometricMovement).canMove = true;
	eatingFood = false;
	doubleClicked = false;
	doubleClickTimer = 0.2;
	timer = 1;
}
function OnMouseDown()
{
	Debug.Log("working");
	if(doubleClicked == true)
	{
		eatingFood = true;
		player.GetComponent(IsometricMovement).canMove = false;
		player.GetComponent(IsometricMovement).foodCounter = player.GetComponent(IsometricMovement).initFood;
		//Destroy(this.gameObject);
	}
	doubleClicked = true;
	doubleClickTimer = 0.2;
	//Debug.Log("YES");
}

function Update()
{
	var inventorySpace = player.GetComponent(Inventory).inventorySpace;
	if(doubleClicked == true)
	{
		doubleClickTimer -= Time.deltaTime;
		
	}
	if(doubleClickTimer <= 0)
	{
		doubleClicked = false;
	}
	//Debug.Log(eatingFood);
	//Debug.Log("yes");
	//eatingFood = true;
	//Debug.Log(eatingFood);
	if(eatingFood == true)
	{
		anim.SetInteger("consuming",1);
		timer -= Time.deltaTime;
		//Debug.Log("true");
	}
	if(timer <= 0)
	{
		anim.SetInteger("consuming",0);
		player.GetComponent(IsometricMovement).canMove = true;
		//Destroy(this.gameObject);
		this.gameObject.SetActive(false);
		eatingFood = false;
		timer = 1;
		for(var i = 0;i<inventorySpace.length;i++)
		{
			if(inventorySpace[i] == "item6")
			{
				inventorySpace[i] = "empty";
				Debug.Log("emptied");
			}
		}
		//eatingFood = false;
	}
}