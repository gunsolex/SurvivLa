var target : Transform;
var distance : float;
var player:GameObject;
var alive:boolean;

function Awake()
{
	alive = true;
}

function Update()
{
	
	if(alive == true)
	{
		alive = player.GetComponent(IsometricMovement).alive;
		transform.position.y = target.position.y;
    	transform.position.x = target.position.x;	
    }
}