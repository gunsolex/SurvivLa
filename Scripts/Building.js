var buildings:GameObject [];
var buildingSelected = -1;
var buildingPlaced;
var placeable:boolean;
var clickCheck:boolean;
var originalColor:Color;
var color1:Color;
var color2:Color;
var building:GameObject;
var player:GameObject;
var itemQuantityText:GUIText [];


function Awake()
{
	buildingPlaced = false;
	clickCheck = true;

}
/*function OnGUI()
{
	for(var i=0;i<buildings.length;i++)
	{
	  if(GUI.Button(new Rect(10,10 + i * 100,100,90), buildings[i].name))
	  {
	  	Debug.Log(buildings.length);
	  	Debug.Log(buildings[i]);
		buildingSelected = i;
		building =  Instantiate(buildings[buildingSelected],this.transform.position,this.transform.rotation);
		buildingPlaced = false;
	  }
	  
	}
}*/
function OnMouseDown()
{
	
	for (var k= 0;k<buildings.length;k++)
	{
		if(buildings[k].name == this.gameObject.name)
		{
			buildingSelected = k;
			building =  Instantiate(buildings[k],this.transform.position,this.transform.rotation);
			//Debug.Log(buildings[k].name);
			
			buildingPlaced = false;
			clickCheck =false;
			//get the value and reduce the value in the crafting scrpit by 1 and make it disappear if it's 0;
		}
	}
}
function Update()
{	
	var craftedItemsQuantity = player.GetComponent(Crafting).craftedItemsQuantity;
	var inventorySpace = player.GetComponent(Inventory).inventorySpace;
	//Debug.Log(craftedItemsQuantity);
	//Debug.Log("lalala");
	if(buildingSelected >= 0 && buildingPlaced == false)
	{
		//Debug.Log(building.collider2D.isTrigger);
		placeable = building.GetComponent(BuildingPlaceable).placeable;
		//Debug.Log(placeable);
		var positionBuilding:Vector2 = Camera.main.ScreenToWorldPoint(Input.mousePosition);
		building.transform.position = positionBuilding;
	}
	
	if(Input.GetMouseButtonDown(0) && buildingPlaced == false && placeable == true && clickCheck == true)
	{
		
			buildingPlaced = true;
			building.GetComponent.<Renderer>().material.color = originalColor;
			building.GetComponent.<Renderer>().material.color.a = 1.0f;
			building.GetComponent.<Rigidbody2D>().mass = 10000000000;
			//building.collider2D.enabled = true;
			building.GetComponent.<Collider2D>().isTrigger = false;
			//Debug.Log(building.collider2D.isTrigger);
			craftedItemsQuantity[buildingSelected] -= 1;
			//Debug.Log(craftedItemsQuantity[buildingSelected]);
			itemQuantityText[buildingSelected].GetComponent.<GUIText>().text = craftedItemsQuantity[buildingSelected].ToString();
			if(craftedItemsQuantity[buildingSelected] == 0)
			{
				//Debug.Log("ISNDAISDIASD");
				//Debug.Log(inventorySpace[0]);
				//Debug.Log(buildings[buildingSelected].name);
				for(var q = 0;q<inventorySpace.length;q++)
				{
					if(inventorySpace[q] == buildings[buildingSelected].name)
					{
						inventorySpace[q] = "empty";
						//Debug.Log(inventorySpace[q]);
					}
				}
			}
			
	}
	if(placeable == true && buildingPlaced == false)
	{
		building.GetComponent.<Renderer>().material.color = color1;
		building.GetComponent.<Renderer>().material.color.a = 1.0f;
	}
	if (placeable == false && buildingPlaced == false && building != null)
	{
		building.GetComponent(SpriteRenderer).material.color = color2;
		building.GetComponent(SpriteRenderer).material.color.a = 0.5f;
	}
	if(Input.GetMouseButtonDown(0) && clickCheck == false)
	{
		clickCheck = true;
	}
	if(Input.GetMouseButtonDown(1))
	{
		building.SetActive(false);
	}

}
