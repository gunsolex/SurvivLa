var insideMe:boolean;
var name1:String;
var player:GameObject;
var deathCheck:boolean;
var playerPosition;
var insideBerry:boolean;
var insideBamboo:boolean;
var treeHealth:Number;
var cutTree:KeyCode;
var anim:Animator;
var timer;
var startTime:boolean;
var insidePalmTree:boolean;
var insideTree:boolean;
var waterBottle:GameObject;
var logs:GameObject;
var logsPrefab:GameObject;
var axe:GameObject;
var chopping:AudioClip;
var treeSound:GameObject;
var treeFalling:AudioClip;

function Awake()
{
	//player = GameObject.FindGameObjectWithTag("Player");
 	name1 = gameObject.name;
 	deathCheck = false;
 	playerPosition = 0;
 	timer = 0.5;
 	startTime = false;
 	axe.SetActive(false);
 	insideMe = false;
}

function OnTriggerEnter2D()
{
	insideMe = false;
	if(name1 == "item6")
	{
		insideBerry = true;
		
	}
	else 
	{
		insideBerry = false;
	
	}
	if(name1 == "item44")
	{
		insideBamboo = true;
	}
	else
	{
		insideBamboo = false;
		
	}
	if(name1 == "item11")
	{
		insidePalmTree = true;
	}
	else
	{
		insidePalmTree = false;
		
	}
	
	
	insideMe = true;
	player.GetComponent(Inventory).itemName = name1;
	player.GetComponent(Inventory).nearItem = insideMe;
	/*playerPosition = player.transform.position.y - this.transform.position.y;
	Debug.Log(playerPosition);
	if(playerPosition>=0 && playerPosition != 0)
	{
		player.renderer.sortingOrder = 0;
		Debug.Log("behind");
	}
	else if(playerPosition <=-1.5 && playerPosition != 0)
	{
		player.renderer.sortingOrder = 1;
		Debug.Log("front");
	}*/
	//Debug.Log(this.transform.position.y);
	//Destroy(this.gameObject);
	//Debug.Log(insideMe);
	
}
function OnTriggerExit2D()
{
	insideMe = false;
	player.GetComponent(Inventory).itemName = name1;
	//Debug.Log(insideMe);
}
function Update()
{
	if(Input.GetKeyDown(cutTree) && insideMe == true && insideBerry == false)
	{
		
		//Debug.Log(insideMe);
		
			//Debug.Log("OK");
			treeSound.GetComponent(AudioSource).PlayOneShot(chopping);
			anim.SetInteger("chopping", 1);
			axe.SetActive(true);
			
		
		startTimer();
		treeHealth -=1;
	}
	
	if(insideMe == true)
	{
		deathCheck = true;
	}
	if(insideMe == true && deathCheck == true && insideBerry == false && treeHealth == 0 && insidePalmTree == true)
	{
		//Debug.Log("PALMING");
		
		//Debug.Log(direction);
		//direction *= -1;
		logsPrefab = Instantiate(logs,player.transform.position,this.transform.rotation);
		//Debug.Log(logsPrefab.transform.position.x);
		logsPrefab.transform.position.x = this.transform.position.x + 6;
		logsPrefab.transform.position.y = this.transform.position.y - 4;
		//Debug.Log(logsPrefab.transform.position.x);
		//logsPrefab.transform.position.y = this.transform.position.y +2;
		//Debug.Log(logsPrefab.transform.localScale.x);
		//logsPrefab.GetComponentInParent(Transform).transform.localScale.x = direction;
		//Debug.Log(logsPrefab.GetComponentInParent(Transform).transform.localScale.x);
	
		axe.SetActive(false);
		waterBottle.GetComponent(DrinkWater).waterAmount = 2;
		treeSound.GetComponent(AudioSource).PlayOneShot(treeFalling);
		Destroy(this.gameObject);
	}
	else if(insideMe == true && deathCheck == true && insideBerry == false && treeHealth == 0 && insideBamboo == false)
	{
		//Debug.Log(this);
		Destroy(this.gameObject);
		logsPrefab = Instantiate(logs,player.transform.position,this.transform.rotation);
		logsPrefab.transform.position.x = this.transform.position.x - 4;
		logsPrefab.transform.position.y = this.transform.position.y - 2;
		treeSound.GetComponent(AudioSource).PlayOneShot(treeFalling);
		axe.SetActive(false);
	}
	
	if(insideMe == true && deathCheck == true && insideBamboo == true && treeHealth == 0)
	{
		//Debug.Log(this);
		//Debug.Log("BAMBOO");
		logsPrefab = Instantiate(logs,player.transform.position,this.transform.rotation);
		logsPrefab.transform.position.x = this.transform.position.x + 6;
		logsPrefab.transform.position.y = this.transform.position.y - 1;
		Destroy(this.gameObject);
		axe.SetActive(false);
	}
	if(startTime == true)
	{
		timer -= Time.deltaTime;
	}
	if(timer <= 0 && insideBerry == false)
	{
		anim.SetInteger("chopping", 0);
		axe.SetActive(false);
	}
}
function startTimer()
{
	timer = 0.2;
	startTime = true;
}