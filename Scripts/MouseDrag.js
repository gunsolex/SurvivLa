var screenPoint:Vector3 ;
var offset:Vector3;
var player:GameObject;
var itemsDetails =["wood","sand","grass","wood2","sand2","grass2"];
var prevPositionX;
var prevPositionY;
var bottle:GameObject;
//var dragging:boolean;

function Awake()
{
	prevPositionX = 0;
	prevPositionY = 0;
	dragging = false;
}

function  OnMouseDown() 
{ 
	//var itemsDetails = player.GetComponent(Inventory).itemsDetail;
	//dragging = false;
	for(var i =0;i<itemsDetails.length;i++)
	{
		if(itemsDetails[i] == gameObject.name)
		{
			//Debug.Log(itemsDetails[i]);
			prevPositionX = player.GetComponent(Inventory).itemsTexture[i].transform.position.x;
			prevPositionY = player.GetComponent(Inventory).itemsTexture[i].transform.position.y;
			//Debug.Log(prevPositionX);
		}
	}
	screenPoint = Camera.main.WorldToScreenPoint(gameObject.transform.position);
 	offset = gameObject.transform.position - Camera.main.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPoint.z));
}
 


function OnMouseDrag() 
{  
	//dragging = true;
	//bottle.GetComponent(DrinkWater).dragging = dragging;
	var curScreenPoint:Vector3 = new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPoint.z);
 	var curPosition:Vector3  = Camera.main.ScreenToWorldPoint(curScreenPoint) + offset;
	transform.position = curPosition;
	//Debug.Log(transform.position.x);
}
function OnMouseUp()
{
	//Debug.Log("just wanna try");
	this.transform.position.x = prevPositionX;
	this.transform.position.y = prevPositionY;
	var hit: RaycastHit;
	var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			
	if (Physics.Raycast(ray, hit)) //check for object hit
	{
		for(var i =0;i<itemsDetails.length;i++)
		{
			if(itemsDetails[i] == hit.collider.gameObject.name)
			{
				this.transform.position.x = hit.collider.gameObject.transform.position.x;
				this.transform.position.y = hit.collider.gameObject.transform.position.y;
				hit.collider.gameObject.transform.position.x = prevPositionX;
				hit.collider.gameObject.transform.position.y = prevPositionY;
			}
		}
		
	}
}
function OnCollisionEnter2D()
{
	Debug.Log("collided");
}