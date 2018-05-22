var player:GameObject;
var xValue:Number;
var yValue:Number;

function Update () 
{
	this.gameObject.transform.position.x = player.transform.position.x + xValue;
	this.gameObject.transform.position.y = player.transform.position.y + yValue;
}