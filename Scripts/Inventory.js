var itemName:String;
var wood:GameObject;
var grass:GameObject;
var sand:GameObject;
var wood2:GameObject;
var grass2:GameObject;
var sand2:GameObject;
var pickUp:KeyCode;
var nearItem:boolean;
//var switch1:GameObject;
//var item22:GameObject;
var item1:item1;
var item2:item2;
var item3:item3;
var item4:item4;
var item5:item5;
var item6:item6;
var items = ["item1","item2","item3","item4","item5","item6"];
var itemsDetail = [item1,item2,item3,item4,item5,item6];
var itemsTexture = [wood,sand,grass,wood2,sand2,grass2]; // change to sprite
var inventorySpace = ["empty","empty","empty","empty","empty","empty"];
private var inventoryPositionX = [3.56, 5, 3.56,0,0,0];
private var inventoryPositionY = [3.18, 3.18, 0.19,0,0,0];
var inventoryCheck:boolean;
var inventorySprite:GameObject;
var deathCheck:boolean;
var openInventory:KeyCode;
var inventoryActivated:boolean;
var player:GameObject;
var itemQuantity = [0,0,0,0,0,0,0,0];
var itemQuantityText:GUIText [];
var itemTextPositionX = [0.35,0];
var itemTextPositionY = [0.11,0];
var timer;


//var color1:Color;
//var player:GameObject;


class item1
{
	var amount = 0;
	var name = "item1ok";

}
class item2
{
	var amount = 0;
	var name = "item2ok";
	
}
class item3
{
	var amount = 0;
	var name = "item3ok";

}
class item4
{
	var amount = 0;
	var name = "item4ok";

}
class item5
{
	var amount = 0;
	var name = "item5ok";

}
class item6
{
	var amount = 0;
	var name = "item6ok";

}

function Awake()
{
	//itemName = "no";
	treeHealth = 3;
	timer = 0;
	for(var t=0;t<itemQuantityText.length;t++)
	{
		itemQuantityText[t].GetComponent.<GUIText>().enabled = false;
	}
	inventoryActivated = false;
	deathCheck = false;
	inventoryNumberCheck = 0;
	//grass.renderer.material.color = color1;
	//grass.renderer.material.color.a = 1.0f;
	//Debug.Log(color1);
	itemsDetail[0] = item1;
	itemsDetail[1] = item2;
	itemsDetail[2] = item3;
	itemsDetail[3] = item4;
	itemsDetail[4] = item5;
	itemsDetail[5] = item6;	
	itemsTexture[0] = wood;
	itemsTexture[1] = sand;
	itemsTexture[2] = grass;
	itemsTexture[3] = wood2;
	itemsTexture[4] = sand2;
	itemsTexture[5] = grass2;
	
	
	
	/*inventoryPositionX[0] = itemsTexture[0].transform.localPosition.x;
	inventoryPositionX[1] = itemsTexture[1].transform.localPosition.x;
	inventoryPositionX[2] = itemsTexture[2].transform.localPosition.x;
	inventoryPositionY[0] = itemsTexture[0].transform.localPosition.y;
	inventoryPositionY[1] = itemsTexture[1].transform.localPosition.y;
	inventoryPositionY[2] = itemsTexture[2].transform.localPosition.y;*/
	for (var l =0;l<itemsTexture.length;l++)
	{
		inventoryPositionX[l] = itemsTexture[l].transform.localPosition.x;
		inventoryPositionY[l] = itemsTexture[l].transform.localPosition.y;
		itemsTexture[l].transform.position.x = 99999;
	}
	inventorySprite.SetActive(false);
	for (var p = 0;p<itemsTexture.length;p++)
	{
		itemsTexture[p].SetActive(false);
	}
		inventoryActivated = false;
	//Debug.Log(itemsTexture[0]);
	/*itemsTexture[0].SetActiveRecursively(false);
	itemsTexture[1].SetActiveRecursively(false);
	itemsTexture[2].SetActiveRecursively(false);*/
	
	inventoryCheck = false;
	//itemName = switch1.GetComponent(Switch).name1;
	//itemName = item22.GetComponent(Switch).name1;
	
}
function GetPositionX()
{
	return inventoryPositionX;
}
function GetPositionY()
{
	return inventoryPositionY;
}

function Update()
{	
	timer -= Time.deltaTime;
	/*for (var ii = 0;ii<itemQuantityText.length;ii++)
	{
		itemQuantityText[ii].transform.position.x = itemTextPositionX[ii];
		itemQuantityText[ii].transform.position.y = itemTextPositionY[ii];
	}*/
	//Debug.Log(inventoryPositionX[4]);
	//Debug.Log(grass.GetComponent(SpriteRenderer).texture);
	//Debug.Log(inventorySpace[0]);
	deathCheck = false;
	//Debug.Log(itemsTexture[0].transform.position.x);
	//Debug.Log(itemName);
	//nearItem = switch1.GetComponent(Switch).insideMe;
	//Debug.Log(switch1);
	//Debug.Log(nearItem);
	
	if(inventoryActivated == true && timer >=0)
	{
		inventorySprite.transform.position.y += 0.05;
		//Debug.Log(inventoryActivated);
	}
	if(timer <= 0)
	{
		inventorySprite.transform.position.x = transform.position.x ;
		inventorySprite.transform.position.y = transform.position.y - 4.5;
	}
	
	if(Input.GetKeyDown(openInventory) && inventoryActivated == true)
	{
		inventorySprite.SetActive(false);//disable both inventory and crafting items
		for (var z = 0;z<itemsTexture.length;z++)
		{
			itemsTexture[z].SetActive(false);
		}
		for (var a = 0;a<itemQuantityText.length;a++)
		{
			//Debug.Log(a);
			itemQuantityText[a].GetComponent.<GUIText>().enabled = false;	
		}
		inventoryActivated = false;
		//Debug.Log(inventoryActivated);
	}
	else if(Input.GetKeyDown(openInventory) && inventoryActivated == false)
	{
		timer = 0.5;
		inventorySprite.SetActive(true);
		inventorySprite.transform.position.x = transform.position.x ;
		inventorySprite.transform.position.y = transform.position.y - 5.9;
		for (var w = 0;w<itemsTexture.length;w++)
		{
			itemsTexture[w].SetActive(true);
		}
		for (var q = 0;q<itemQuantityText.length;q++)
		{
			
			if(inventorySpace != "empty")
			{
				//Debug.Log(q);
				//itemQuantityText[q].guiText.enabled = true;
			}
				
		}
		inventoryActivated = true;
		//Debug.Log(inventoryActivated);
	}
	//Debug.Log(nearItem);
	if(nearItem == true && Input.GetKeyDown(pickUp))//GetKeyDown check for 1 frame(stupid error to use GetKey)
	{	
		//Debug.Log("inside first");
		inventoryCheck = false;
		
		for(var i =0;i<items.length;i++)
		{
			if(items[i] == itemName)
			{
				//Debug.Log(items[i]);
				//Debug.Log(itemName);
				deathCheck = true;
				//Debug.Log("inside");
				/*var gameObjectName = GameObject.FindWithTag("item1");
				Destroy(gameObjectName);*/
				itemsDetail[i].amount += 1;
				//Debug.Log(itemsDetail[i].amount);
				//Debug.Log(gameObjectName);
				//Debug.Log("shouldbeonetimeonly");
				if(inventoryActivated == true)
				{
					itemsTexture[i].SetActive(true);
				}
				//inventorySpace = player.GetComponent(Crafting).inventorySpace;
				//nearItem = switch1.GetComponent(Switch).insideMe;
				for (var k=0;k<inventorySpace.length;k++)
				{
					//Debug.Log(k);
					//Debug.Log(inventorySpace[k]);
					//Debug.Log(items[i]);
					if(inventorySpace[k] == items[i])
					{
						//Debug.Log(k+inventorySpace[k]);
						//Debug.Log(inventoryPositionX[k]);
						//Debug.Log("food");
						//Debug.Log("do nothing for now");
						break;
						
						
						
					}
					else if (inventorySpace[k] == "empty")
					{
							//Debug.Log("inside");
							//Debug.Log(itemsTexture[i]);
							itemQuantity[i] += 1;
							itemQuantityText[i].GetComponent.<GUIText>().text = itemQuantity[i].ToString();
							itemsTexture[i].transform.position.x =  inventorySprite.transform.position.x + inventoryPositionX[k]; //-4.4;
							itemsTexture[i].transform.position.y =  inventorySprite.transform.position.y + inventoryPositionY[k]; //-1.4;
							itemQuantityText[i].transform.localPosition.x = itemTextPositionX[k];
							itemQuantityText[i].transform.localPosition.y = itemTextPositionY[k];
							inventorySpace[k] = items[i];
							player.GetComponent(Crafting).playerWood += 20;
							//Debug.Log(inventorySpace[k]);
							inventoryCheck = true;
							break;
					}
					
					
				}	
			}
		
		}
	}
	
}