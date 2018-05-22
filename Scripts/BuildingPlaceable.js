var placeable:boolean;


function Awake()
{
	placeable = true;
}
function OnTriggerEnter2D()
{
	placeable = false;
}

function OnTriggerExit2D()
{	
	
	placeable = true;
}
function OnTriggerStay2D()
{
	placeable = false;
}
function Update()
{
	//Debug.Log(placeable);
}