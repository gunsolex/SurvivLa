var timer;
var speed:float;


function Awake()
{
	timer = 4;
}

function Update () 
{
	timer -= Time.deltaTime;
	if(timer >= 3 && timer <= 4)
	{
		this.gameObject.GetComponent.<Rigidbody2D>().velocity.x = speed;
	}
	if(timer >= 2 && timer <= 2.99)
	{
		this.gameObject.GetComponent.<Rigidbody2D>().velocity.y = -speed;
	}
	if(timer >= 1 && timer <= 1.99)
	{
		this.gameObject.GetComponent.<Rigidbody2D>().velocity.x = -speed;
	}
	if(timer >= 0 && timer <= 0.99)
	{
		this.gameObject.GetComponent.<Rigidbody2D>().velocity.y = speed;
	}
	if(timer <0)
	{
		timer = 4;
	}
}