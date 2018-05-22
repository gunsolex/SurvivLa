var question:GUITexture;
var yes:GUITexture;
var no:GUITexture;
var basicShelter:GameObject;



function OnMouseDown()
{
	Debug.Log("OK");
	question.GetComponent.<GUITexture>().enabled = false;
	yes.GetComponent.<GUITexture>().enabled = false;
	no.GetComponent.<GUITexture>().enabled = false;
}
function Update()
{
	if(Application.loadedLevel == 1 && basicShelter != null)
	{
		basicShelter.GetComponent("OpenTextBox").question = question;
		basicShelter.GetComponent("OpenTextBox").yes = yes;
		basicShelter.GetComponent("OpenTextBox").no = no;
	}
	if(Application.loadedLevel == 3 && basicShelter != null)
	{
		//Debug.Log("dream");
		basicShelter.GetComponent("OpenTextBox").question = question;
		basicShelter.GetComponent("OpenTextBox").yes = yes;
		basicShelter.GetComponent("OpenTextBox").no = no;
	}
	//Debug.Log(Application.loadedLevel);
}