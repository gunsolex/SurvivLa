var timer;
var menuSlided;
//var prevPosition;

function Awake()
{
	timer = 0;
	menuSlided = -1;
}

function OnMouseDown()
{
	timer = 1;
	menuSlided *= -1;
	prevPosition = this.GetComponent.<GUITexture>().transform.position.y;
}
function Update()
{
	
	//Debug.Log(timer);
	if(menuSlided == 1 && timer >0)
	{
		timer -= Time.deltaTime;
		this.GetComponent.<GUITexture>().transform.position.y += Time.deltaTime * 0.45;
		//prevPosition = this.guiTexture.transform.position.y;
		
	}
	else if(menuSlided == -1 && timer >0)
	{
		timer -= Time.deltaTime;
		this.GetComponent.<GUITexture>().transform.position.y -= Time.deltaTime * 0.45;
	}
	/*if(timer <= 0)
	{
		//Debug.Log(prevPosition);
		this.guiTexture.transform.position.y = prevPosition;
	}*/
	
}