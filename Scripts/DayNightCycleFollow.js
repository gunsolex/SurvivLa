var nightColour:Color;
var timeObject:GameObject;
var timer;
var tempTimer:float=0;
var day;

function Awake()
{
	
	timeObject = GameObject.Find("Player");
	timer = timeObject.GetComponent(DayNightCycle).timer;
	
}
function Update()
{
	if(Application.loadedLevel == 1)
	{
		//.Log(timer);
		//var timer = timeObject.GetComponent(Rain).timer;
		//timer -= Time.deltaTime;
		timer = timeObject.GetComponent(DayNightCycle).timer;
		day = timeObject.GetComponent(DayNightCycle).day;
		tempTimer = timeObject.GetComponent(DayNightCycle).tempTimer;
		//Debug.Log(timer);
		if(day == 1)
		{
			tempTimer+=Time.deltaTime;
			this.GetComponent.<Renderer>().color = Color.Lerp(Color.white,nightColour,tempTimer);
			this.GetComponent.<Renderer>().color.a = 1f;
			
		}
		else if(day == -1)
		{
			tempTimer+=Time.deltaTime;
			this.GetComponent.<Renderer>().color = Color.Lerp(nightColour,Color.white,tempTimer);
			this.GetComponent.<Renderer>().color.a = 1f;
		}
	}
	
	
}