var newTemp:int;

function Update () 
{
	var tempPos = Camera.main.WorldToScreenPoint(this.transform.position);
	var intPos:int = tempPos.y;
	this.GetComponent.<Renderer>().sortingOrder = -intPos;
	//445 465
}