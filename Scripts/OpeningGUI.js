var textureGUI:GUITexture;
var closeWindow:KeyCode;
var checkClick;

function Awake()
{
	textureGUI.GetComponent.<GUITexture>().enabled = false;
	checkClick = 1;
}

function OnMouseDown()
{
	
	if(checkClick == 1)
	{
		textureGUI.GetComponent.<GUITexture>().enabled = true;
	}
	else if(checkClick == -1)
	{	
		textureGUI.GetComponent.<GUITexture>().enabled = false;
	}
	checkClick *= -1;
}

function Update()
{
	if(Input.GetKeyDown(closeWindow))
	{
		textureGUI.GetComponent.<GUITexture>().enabled = false;
	}
}