var timer;

function Awake()
{
	timer = 3;
}
function Update () 
{
	timer -= Time.deltaTime;
	if (timer <= 1)
	{
		this.GetComponent.<GUITexture>().color.a = timer;
	}
}