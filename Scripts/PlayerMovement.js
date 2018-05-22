var moveLeft:KeyCode;
var moveRight:KeyCode;
var speed:Number;
var jump:KeyCode;
var pressButton:KeyCode;
var onGround:boolean;
var groundCheck:Transform;
var groundRadius:float = 0.2f;
var knowGround:LayerMask;
var alive:boolean;
var switch1:GameObject;
var nearSwitch1:boolean;


function Awake()
{
	onGround = false;
	alive = true;
	nearSwitch1 = false;
}

function Update () 
{
	nearSwitch1 = switch1.GetComponent(Switch).insideMe;
	if(nearSwitch1 == true && Input.GetKey(pressButton))
	{
		Debug.Log("Activated");
	}
	if(alive == true)
	{
		onGround = Physics2D.OverlapCircle(groundCheck.position, groundRadius, knowGround);
	}
	if(Input.GetKey(jump) && onGround == true)
	{
		GetComponent.<Rigidbody2D>().velocity.y = 20;
		//Destroy(gameObject);
		//alive = false;
	}
	if(Input.GetKey(moveRight))
	{
		GetComponent.<Rigidbody2D>().velocity.x = speed;
	}
	else if(Input.GetKey(moveLeft))
	{
		GetComponent.<Rigidbody2D>().velocity.x = speed * -1;
	}
	else
	{
		GetComponent.<Rigidbody2D>().velocity.x = 0;
	}
	
	
}



//Switch (Use trigger box to activate certain variable and use button to check



