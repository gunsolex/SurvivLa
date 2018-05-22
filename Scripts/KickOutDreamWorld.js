var timer;

function Awake()
{
	timer = 10;
}


function Update () 
{
	timer -= Time.deltaTime;
	if(timer <= 0)
	{
		Application.LoadLevel("RealWorld");
	}
}