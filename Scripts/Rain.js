var timer:float;
var random:int;
var rainFrequency:int;
var rainCheck:int;
var rainTimer:Number;
var rainTimerObj:GameObject;
var newTimer:int;
var rainedOnce:boolean;
var player:GameObject;
var rain:GameObject;
var moveUp:KeyCode;
var anim:Animator;
//var dayTimer;
//var day;

function Awake()
{
	day = 1;
	dayTimer = 10;
	timer = 60;
	rainFrequency = Random.Range(1,3);
	rainCheck = 0;
	rainTimer = 1;
	//rain.renderer.enabled = false;
	rain.GetComponentInChildren(SpriteRenderer).enabled = false;
}

function Update () 
{
	/*dayTimer -= Time.deltaTime;
	if(dayTimer <= -2)
	{
		dayTimer = 10;
	}
	//rain.renderer.enabled = true;
	if(timer <=0)
	{
		timer = 60;
	}*/
	rain.transform.position.x = player.transform.position.x - 7; //Remember to disable apply root motion
	rain.transform.position.y = player.transform.position.y;
	if(Input.GetKey(moveUp))
	{
		anim.speed = 1.5;
		//rain.transform.position.y = player.transform.position.y + 3;
		//Debug.Log("up");
	}
	else
	{
		anim.speed = 1;
	}
	newTimer = timer;
	timer -= Time.deltaTime;
	GetComponent.<GUIText>().text = newTimer.ToString();
	rainTimerObj.GetComponent.<GUIText>().text = rainTimer.ToString();
	if(newTimer>10)
	{
		random = Random.Range(1,2000);
		
		
		if(random >50 && rainCheck == 0)
		{
			//Debug.Log("no rain");
		}
		else if(random == 50 && rainCheck == 0 && rainFrequency > 0)
		{
			//Debug.Log("rain");
	
			rain.GetComponentInChildren(SpriteRenderer).enabled = true;
			rainFrequency -= 1;
			rainCheck = 1;
			rainTimer = Random.Range(10,20);
			rainedOnce = true;
		}
	}
	if(newTimer<=10 && rainedOnce == false)
	{
		random = Random.Range(1,9);
		if (newTimer == random)
		{
			rainTimer = Random.Range(10,20);
			rain.GetComponentInChildren(SpriteRenderer).enabled = true;
			rainCheck = 1;
			//Debug.Log("Rained when there is no rain");
		}
	}
		
	if (rainCheck == 1)
	{
		rainTimer -= Time.deltaTime;
	}
	if (rainTimer <= 0)
	{
		rain.GetComponentInChildren(SpriteRenderer).enabled = false;
		//Debug.Log("RainStopped");
		//Debug.Log(rainFrequency);
		rainCheck = 0;
	}
}

