var emptyBerryBush:Sprite;
//var berryBush:Sprite;
var collectKey:KeyCode;
var inside:boolean;

function Awake()
{
	inside = false;
}

function OnTriggerEnter2D()
{
	inside = true;
}
function OnTriggerExit2D()
{
	inside = false;
}

function Update()
{
	if(Input.GetKeyDown(collectKey) && inside == true)
	{
		//Debug.Log("inside");
		this.GetComponent(SpriteRenderer).sprite = emptyBerryBush;
	}
}