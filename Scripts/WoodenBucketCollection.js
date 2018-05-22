var rainCheck;
var filledBucket:Sprite;
var rain:GameObject;
var collectBucket:KeyCode;
var insideMe:boolean;
var filled:boolean;
function Awake()
{
	insideMe = false;
	filled = false;
	rain = GameObject.Find("Time");
}
function OnTriggerEnter2D()
{
	insideMe = true;
	Debug.Log("INSIDE");
}
function OnTriggerExit2D()
{
	insideMe = false;
}
function Update () 
{
	//Debug.Log(insideMe);
	rainCheck = rain.GetComponent(Rain).rainCheck;
	//Debug.Log(rainCheck);
	if(rainCheck == 1)
	{
		filled = true;
		this.gameObject.GetComponent(SpriteRenderer).sprite = filledBucket;
	}
	if(Input.GetKeyDown(collectBucket) && insideMe == true && filled == true)
	{
		Debug.Log("go into inventory");
	}
	else if(Input.GetKeyDown(collectBucket) && insideMe == true && filled == false)
	{
		Debug.Log("go into inventory EMPTY");
	}
}
