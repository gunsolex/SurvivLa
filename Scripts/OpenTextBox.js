var enterKey:KeyCode;
var world:String;
var inside:boolean;
var question:GUITexture;
var yes:GUITexture;
var no:GUITexture;
var NoButton:GameObject;
var day;
var player:GameObject;

function Awake()
{
	player = GameObject.Find("Player");
}

function OnTriggerEnter2D()
{
	
	inside = true;
	//question.guiTexture.enabled = false;
	//yes.guiTexture.enabled = false;
	//no.guiTexture.enabled = false;
	//Debug.Log("inside");

	
}
function OnTriggerExit2D()
{
	inside = false;
}
function Update () 
{
	//Debug.Log(Application.loadedLevel);
	if(Application.loadedLevel == 1)
	{
		day = player.GetComponent(DayNightCycle).day;
	}
	if(Application.loadedLevel == 3)
	{
		day = -1;
	}
	//Debug.Log(day);
	if(Input.GetKeyDown(enterKey) && inside == true && day == -1)
	{
		Debug.Log("loaded");
		//Application.LoadLevel(world);
		question.GetComponent.<GUITexture>().enabled = true;
		yes.GetComponent.<GUITexture>().enabled = true;
		no.GetComponent.<GUITexture>().enabled = true;
	}
}