


var craftingSprite:GameObject;
var craftButton:GameObject;
var craftingValue;
var item1Texture:GameObject;
var item2Texture:GameObject;
var item3Texture:GameObject;
var item4Texture:GameObject;
var item5Texture:GameObject;
var item6Texture:GameObject;
var item7Texture:GameObject;
var item8Texture:GameObject;
var craftingItems1:GameObject [];
//var buttons = ["ToolsButton","DefenseButton","Test","ContraptionsButton"];
var buttons = ["ToolsButton","DefenseButton","BuildingButton","ContraptionsButton"];
var craftingItems = ["Con1","Con2","Defense1","Defense2","Build1","Build2","Tools1","Tools2"];
var craftedItems = ["Crafted1","Crafted2","Crafted3","Crafted4","Crafted5","Crafted6","Crafted7","Crafted8"];
var craftedItemsQuantity = [0,0,0,0,0,0,0,0];
var craftedItemsTexture = [item1Texture,item2Texture,item3Texture,item4Texture,item5Texture,item6Texture,item7Texture,item8Texture];
var conCraft1:GameObject;
var conCraft2:GameObject;
var defenseCraft1:GameObject;
var defenseCraft2:GameObject;
var buildCraft1:GameObject;
var buildCraft2:GameObject;
var toolsCraft1:GameObject;
var toolsCraft2:GameObject;
var craftingItemsPreview =[conCraft1,conCraft2,defenseCraft1,defenseCraft2,buildCraft1,buildCraft2,toolsCraft1,toolsCraft2];
var pages = [craftingToolsPage,defensePage,buildingPage,contraptionPage];
var craftingToolsPage:GameObject;
var buildingPage:GameObject;
var defensePage:GameObject;
var contraptionPage:GameObject;
var insidePage:boolean;
var insideItem:boolean;
var inventorySprite:GameObject;
var player:GameObject;
var inventoryPositionX;
var inventoryPositionY;
var playerWood;
var playerWater;
var itemRequirements = [item1,item2,item3,item4,item5,item6,item7,item8];
var item1:Item1;
var item2:Item2;
var item3:Item3;
var item4:Item4;
var item5:Item5;
var item6:Item6;
var item7:Item7;
var item8:Item8;
var itemQuantityText:GUIText [];
var openCrafting:KeyCode;
var toolsButton:GameObject;
var buildingsButton:GameObject;
var conButton:GameObject;
var defenseButton:GameObject;
var craftButton1:GameObject;
var craftingActivated:boolean;
var nearCrafting:boolean;
var openCrafting2:boolean;

class Item1
{
	var wood = 5;
	var water = 3;
}
class Item2
{
	var wood = 20;
	var water = 20;
}
class Item3
{
	var wood = 5;
	var water = 20;
}
class Item4
{
	var wood = 5;
	var water = 20;
}
class Item5
{
	var wood = 5;
	var water = 8;
}
class Item6
{
	var wood = 5;
	var water = 12;
}
class Item7
{
	var wood = 5;
	var water = 14;
}
class Item8
{
	var wood = 5;
	var water = 16;
}


function Awake()
{
	opencrafting = false;
	craftButton1.SetActive(false);
	craftingActivated = false;
	itemRequirements[0] = item1;
	itemRequirements[1] = item2;
	itemRequirements[2] = item3;
	itemRequirements[3] = item4;
	itemRequirements[4] = item5;
	itemRequirements[5] = item6;
	itemRequirements[6] = item7;
	itemRequirements[7] = item8;
	playerWood = 200;
	playerWater = 2000;
	inventoryPositionX =  player.GetComponent(Inventory).GetPositionX();
	inventoryPositionY =  player.GetComponent(Inventory).GetPositionY();
	//positionX[0] = inventoryPositionX[0];
	craftingValue = -10;
	pages[0] = craftingToolsPage;
	pages[1] = defensePage;
	pages[2] = buildingPage; 
	pages[3] = contraptionPage;
	craftingItemsPreview[0] = conCraft1;
	craftingItemsPreview[1] = conCraft2;
	craftingItemsPreview[2] = defenseCraft1;
	craftingItemsPreview[3] = defenseCraft2;
	craftingItemsPreview[4] = buildCraft1;
	craftingItemsPreview[5] = buildCraft2;
	craftingItemsPreview[6] = toolsCraft1;
	craftingItemsPreview[7] = toolsCraft2;
	craftedItemsTexture[0] = item1Texture;
	craftedItemsTexture[1] = item2Texture;
	craftedItemsTexture[2] = item3Texture;
	craftedItemsTexture[3] = item4Texture;
	craftedItemsTexture[4] = item5Texture;
	craftedItemsTexture[5] = item6Texture;
	craftedItemsTexture[6] = item7Texture;
	craftedItemsTexture[7] = item8Texture;
		
	for (var p=0;p<craftingItemsPreview.length;p++)
	{
		craftingItemsPreview[p].SetActive(false);
		craftedItemsTexture[p].SetActive(false);
		itemQuantityText[p].GetComponent.<GUIText>().enabled = false;
		
		
	}
	insidePage = false;
	insideItem = false;
	//Debug.Log(buttons[3]);
	buildingPage.SetActive(false);
	craftingToolsPage.SetActive(false);
	defensePage.SetActive(false);
	contraptionPage.SetActive(false);
	craftingSprite.SetActive(false);
	toolsButton.SetActive(false);
	buildingsButton.SetActive(false);
	conButton.SetActive(false);
	defenseButton.SetActive(false);
	craftButton1.SetActive(false);
}

function Update () 
{	
	//Debug.Log(nearCrafting);
	//Debug.Log(craftingActivated);
	if(Input.GetKeyDown(openCrafting) && craftingActivated == false)
	{
		//Debug.Log("opened");
		craftingSprite.SetActive(true);
		toolsButton.SetActive(true);
		buildingsButton.SetActive(true);
		conButton.SetActive(true);
		defenseButton.SetActive(true);
		//craftButton1.SetActive(true);
		craftingActivated = true;
		for (var pa=0;pa<craftingItemsPreview.length;pa++)
		{
			//craftingItemsPreview[pa].SetActive(true);
			craftingItems1[pa].SetActive(true);
			//craftedItemsTexture[pa].SetActive(true);
			//itemQuantityText[pa].guiText.enabled = true;
		}
		
		
	}
	else if(Input.GetKeyDown(openCrafting) && craftingActivated == true)
	{
		//Debug.Log("closed");
		craftingSprite.SetActive(false);
		toolsButton.SetActive(false);
		buildingsButton.SetActive(false);
		conButton.SetActive(false);
		defenseButton.SetActive(false);
		craftButton1.SetActive(false);
		craftingActivated = false;
		for (var pq=0;pq<craftingItemsPreview.length;pq++)
		{
			craftingItemsPreview[pq].SetActive(false);
			craftingItems1[pq].SetActive(false);
			//craftedItemsTexture[pq].SetActive(false);
			//itemQuantityText[pq].guiText.enabled = false;
			
			
		}
	}
	
	//craftedItemsTexture[1].renderer.enabled = false;
	
	//Debug.Log(playerWood);
	//	Debug.Log(crafted
	var inventorySpace = player.GetComponent(Inventory).inventorySpace;
	var itemTextPositionX = player.GetComponent(Inventory).itemTextPositionX;
	var itemTextPositionY = player.GetComponent(Inventory).itemTextPositionY;
	var inventoryActivated = player.GetComponent(Inventory).inventoryActivated;
	//Debug.Log(inventorySpace[0]);
	//Debug.Log(inventorySpace[0]);
	//Debug.Log(inventorySpace[0]);
	for(var d=0;d<craftedItemsQuantity.length;d++)
	{
		if(craftedItemsQuantity[d] == 0)
		{
				//Debug.Log(d);
				craftedItemsTexture[d].SetActive(false);
				itemQuantityText[d].GetComponent.<GUIText>().enabled = false;
				/*for(var dd = 0;dd<inventorySpace.length;dd++)
				{
					if(inventorySpace[dd] == craftedItems[dd])
					{
						inventorySpace[dd] == "empty";
					}
				}*/
			
		}
		if(craftedItemsQuantity[d] != 0 && inventoryActivated == true)
		{
			itemQuantityText[d].GetComponent.<GUIText>().enabled = true;
		}
	}
	
	
	craftingSprite.transform.position.x = this.transform.position.x + 4;
	craftingSprite.transform.position.y = this.transform.position.y +2;
	/*for (var p=0;p<craftingItemsPreview.length;p++)
	{
		craftingItemsPreview[p].transform.position.x = craftingSprite.transform.position.x + 0.8;
		craftingItemsPreview[p].transform.position.y = craftingSprite.transform.position.y - 0.5 ;
	}*/
	for (var j=0;j<pages.length;j++)
	{
		pages[j].transform.position.x = craftingSprite.transform.position.x;
		pages[j].transform.position.y = craftingSprite.transform.position.y  + 2;
	}
	craftButton.transform.position.x = craftingSprite.transform.position.x + 0.54;
	craftButton.transform.position.y = craftingSprite.transform.position.y - 2;
	/*for(var child:Transform in craftingToolsPage.transform)
	{
		child.transform.position.x = child.transform.localPosition.x;
		child.transform.position.y = child.transform.localPosition.y;
		//Debug.Log(child.transform.localPosition.x);
	}*/
	
	var hit: RaycastHit;
	var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			
	if (Physics.Raycast(ray, hit)) //check for object hit
	{
		
		//Debug.Log(hit.collider.gameObject.name);
		if(Input.GetMouseButtonDown(0))
		{
			if(hit.collider.gameObject.name == "CraftButton" && playerWater >= itemRequirements[craftingValue].water && playerWood >= itemRequirements[craftingValue].wood)
			{
				//Debug.Log("CRAFTED");
				//Debug.Log(craftingValue);
				//Debug.Log(craftedItems[craftingValue]);
				playerWater -= itemRequirements[craftingValue].water;
				playerWood -= itemRequirements[craftingValue].wood;
				
				
				for (var r=0;r<inventorySpace.length;r++)
				{ 
					
					
					if(inventorySpace[r] == craftedItems[craftingValue])
					{
						
						craftedItemsQuantity[craftingValue] += 1;
						itemQuantityText[craftingValue].GetComponent.<GUIText>().text = craftedItemsQuantity[craftingValue].ToString();
						break;
						
						
					}
					else if (inventorySpace[r] == "empty")
					{
							if(craftingValue != 4 && craftingValue != 5 || nearCrafting == true)
							{
								craftedItemsQuantity[craftingValue] += 1;
								itemQuantityText[craftingValue].GetComponent.<GUIText>().text = craftedItemsQuantity[craftingValue].ToString();
								//Debug.Log(craftingValue);
								//Debug.Log(craftedItemsQuantity[craftingValue]);
								//Debug.Log(craftingValue);
								if(craftingValue == 4)
								{
									//Debug.Log("ADASDSDA");
									craftedItemsTexture[craftingValue].transform.position.x = inventorySprite.transform.position.x + inventoryPositionX[r];
									craftedItemsTexture[craftingValue].transform.position.y = inventorySprite.transform.position.y + inventoryPositionY[r] - 0.5;
								}
								else
								{
									craftedItemsTexture[craftingValue].transform.position.x = inventorySprite.transform.position.x + inventoryPositionX[r];
									craftedItemsTexture[craftingValue].transform.position.y = inventorySprite.transform.position.y + inventoryPositionY[r];
								}
								if(inventoryActivated == true)
								{
									itemQuantityText[craftingValue].GetComponent.<GUIText>().enabled = true;
								}
								itemQuantityText[craftingValue].transform.localPosition.x = itemTextPositionX[r];
								itemQuantityText[craftingValue].transform.localPosition.y = itemTextPositionY[r];
								insideItem = true;
								inventorySpace[r] = craftedItems[craftingValue];
								//Debug.Log(inventorySpace[r]);
								//Debug.Log("check for space");
								//Debug.Log(inventorySpace[k]);
								
								break;
							}
							
					}
				}
				//Debug.Log(craftingValue);
				craftedItemsTexture[craftingValue].SetActive(true);
				
			}
			for(var k=0;k<craftingItems.length;k++)
			{
				if(craftingItems[k] == hit.collider.gameObject.name)
				{
					//Debug.Log(craftingItems[k]);
					craftingItemsPreview[k].SetActive(true);
					for(var tt = 0;tt<craftingItems.length;tt++)
					{
						craftingItems1[tt].SetActive(false);
						craftingItems1[tt].GetComponent(MouseEffectsUpdated).mouseDown = false;
					}
					craftButton1.SetActive(true);
					craftingValue = k;
					insidePage = true;
					insideItem = false;
					//Debug.Log(insideItem);
					//Debug.Log(insidePage);
					
				}
			}
			for(var t=0;t<craftingItems.length;t++)
			{
				if(craftingItems[t] != hit.collider.gameObject.name && insideItem == false)
				{
					//Debug.Log("OKOOOKOK");
					//Debug.Log(hit.collider.gameObject.name);
					//Debug.Log(craftingItems[t]);
					
					craftingItemsPreview[t].SetActive(false);
					
					//insideItem = true;
					//Debug.Log(insidePage);
					
				}
			}
			for(var i=0;i<buttons.length;i++)
			{
				
				if(buttons[i] == hit.collider.gameObject.name)
				{
					//Debug.Log(buttons[i] + "yes");
					pages[i].SetActive(true);
					for(var tk = 0;tk<craftingItems.length;tk++)
					{
						craftingItems1[tk].SetActive(true);
						craftingItemsPreview[tk].SetActive(false);
					}
					
					craftButton1.SetActive(false);
					insidePage = false;
					//Debug.Log(insidePage);
					//pages[i].transform.position.x = craftingSprite.transform.position.x;
					//pages[i].transform.position.y = craftingSprite.transform.position.y;
				}
			
				
			}
			for (var l=0;l<buttons.length;l++)
			{
				if(buttons[l] != hit.collider.gameObject.name && insidePage == false)
				{
					//Debug.Log(l);
					//Debug.Log("inside");
					pages[l].SetActive(false);
					
				}
			}
			//Debug.Log(hit.collider.gameObject.name);
		}
	}
		
}