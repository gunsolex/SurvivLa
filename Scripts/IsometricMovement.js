var moveRight:KeyCode;
var moveUp:KeyCode;
var moveDown:KeyCode;
var moveLeft:KeyCode;
var speed:Number;
var jump:KeyCode;
var pressButton:KeyCode;
var onGround:boolean;
var groundRadius:float = 0.2f;
var knowGround:LayerMask;
var alive:boolean;
var switch1:GameObject;
var nearSwitch1:boolean;
var waterCounter:Number;
var foodCounter:Number;
var stashCounter:Number;
var waterText:GameObject; //can use array in the future(assign a name to the gameobject) compare with [i] for loop
var foodText:GameObject;
var stashText:GameObject;
var anim:Animator;
var attack:Number;
var weapon1:weapon;
var items = ["MouseTest", "okok", "not this"];
var test = [weapon1,"nono", "nono2"];
var player:GameObject;
var healthBar:GUITexture;
var waterBar:GUITexture;
var initWater;
var initFood;
var direction;
var playerShadow:GameObject;
var canMove:boolean;
var walking:AudioClip;


//var testing:GameObject;


class weapon
{
	
	var attack:Number = 5;
	var defense:Number = 10;
	var name = "baba";
	
	
	function getAttack()
	{	
		return attack;
	}
}


function Awake()
{
	canMove = true;
	direction = this.transform.localScale.x;
	//shadowDirection = playerShadow.transform.localScale.x;
	onGround = false;
	alive = true;
	nearSwitch1 = false;
	//waterCounter = 20;
	//foodCounter = 20;
	initFood = healthBar.pixelInset.width;
	initWater = waterBar.pixelInset.width;
	foodCounter = healthBar.pixelInset.width;
	waterCounter = waterBar.pixelInset.width;
	stashCounter = 300;
	test[0] = weapon1;
	
}

function Update () 
{	
	playerShadow.transform.position.x = this.transform.position.x - 0.4;
	playerShadow.transform.position.y = this.transform.position.y + 0.5;
	//Debug.Log(foodCounter);
	waterBar.pixelInset.width = waterCounter;
	healthBar.pixelInset.width = foodCounter;
	/*if(Input.GetMouseButtonDown(0))
	{
		Debug.Log("test");
		Instantiate(testing,this.transform.position,this.transform.rotation);
		
	}*/
	
	//nearSwitch1 = switch1.GetComponent(Switch).insideMe;
	waterCounter -= Time.deltaTime * 2;
	foodCounter -= Time.deltaTime * 0.8;
	waterText.GetComponent.<GUIText>().text = waterCounter.ToString();
	foodText.GetComponent.<GUIText>().text = foodCounter.ToString();
	stashText.GetComponent.<GUIText>().text = stashCounter.ToString();
	if(waterCounter <=0)
	{
		Debug.Log("dead");
		Application.LoadLevel("GameOver");
		alive = false;
		//stash = (stash * 65/100);
		Destroy(player);
		
	}
	if(foodCounter <=0 )
	{
		Debug.Log("dead food");
		alive = false;
		//stash = (stash * 65/100);
		Destroy(player);
		
	}
	var hit: RaycastHit;
	var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			
	if (Physics.Raycast(ray, hit)) //check for object hit
	{
		for(var i:int = 0;i<items.length;i++)
		{
		
			if (items[i] == hit.collider.gameObject.name)
			{
				if(Input.GetMouseButtonDown(0))
				{
				 	waterCounter += 1;
				 	foodCounter += 1;
				 	stashCounter +=1;
				 	//Debug.Log(test[i].name);
				 	Debug.Log(test[i].name);
				 	 
				 	//Debug.Log(test[i].name);
				}
				
			}
		}
	}
	
	
	if(nearSwitch1 == true && Input.GetKey(pressButton))
	{
		Debug.Log("Activated");
	}
	
	if(Input.GetKeyDown(moveRight) || Input.GetKeyDown(moveLeft) || Input.GetKeyDown(moveUp) || Input.GetKeyDown(moveDown))
	{
		GetComponent.<AudioSource>().clip = walking;
		GetComponent.<AudioSource>().Play();
	}
	if(Input.GetKey(moveRight) && alive == true && canMove == true)
	{
		GetComponent.<Rigidbody2D>().velocity.x = speed;
		if(direction <=0)
		{
			direction *= -1;
		}
		
		this.transform.localScale.x = direction;
		//playerShadow.transform.localScale.x = shadowDirection;
		anim.SetInteger("speed", 2);//animating script
		
		
	}
	if(Input.GetKey(moveLeft) && alive == true && canMove == true)
	{
		GetComponent.<Rigidbody2D>().velocity.x = speed * -1;
		if(direction >=0)
		{
			direction *= -1;
		}
		
		this.transform.localScale.x = direction;
		//playerShadow.transform.localScale.x = shadowDirection;
		anim.SetInteger("speed", 2);//animating script
		
	}
	if(Input.GetKey(moveUp) && alive == true && canMove == true)
	{
		GetComponent.<Rigidbody2D>().velocity.y = speed;
		
		anim.SetInteger("speed", 1);//animating script
	}
	if(Input.GetKey(moveDown) && alive == true && canMove == true)
	{
		GetComponent.<Rigidbody2D>().velocity.y = speed * -1;
		
		anim.SetInteger("speed", 1);//animating script
		
	}
	
	if(Input.GetKeyUp(moveRight) || Input.GetKeyUp(moveLeft))
	{
		GetComponent.<Rigidbody2D>().velocity.x = 0;
		GetComponent.<AudioSource>().Stop();
		anim.SetInteger("speed", 0);//animating script

	}
	
	
	if(Input.GetKeyUp(moveUp) || Input.GetKeyUp(moveDown))
	{
		GetComponent.<Rigidbody2D>().velocity.y = 0;
		GetComponent.<AudioSource>().Stop();
		anim.SetInteger("speed", 0);//animating script
	}
	
}