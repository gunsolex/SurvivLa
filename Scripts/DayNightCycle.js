var nightColour:Color;
var timeObject:GameObject;
var timer;
var tempTimer:float=0;
var day;

function Awake()
{
	timer = 10;
	day = 1;
}
function Update()
{
	//var timer = timeObject.GetComponent(Rain).timer;
	timer -= Time.deltaTime;
	//Debug.Log(timer);
	if(timer <= 0 && day == 1)
	{
		tempTimer+=Time.deltaTime;
		this.GetComponent.<Renderer>().color = Color.Lerp(Color.white,nightColour,tempTimer);
		this.GetComponent.<Renderer>().color.a = 1f;
		
	}
	else if(timer <=0 && day == -1)
	{
		tempTimer+=Time.deltaTime;
		this.GetComponent.<Renderer>().color = Color.Lerp(nightColour,Color.white,tempTimer);
		this.GetComponent.<Renderer>().color.a = 1f;
	}
	if (timer <=-2)
	{
		timer = 8;
		day *= -1;
		tempTimer = 0;
	}
	
}