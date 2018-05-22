

function Update () 
{
	this.gameObject.transform.Rotate(Vector3(0,0,Time.deltaTime * - 18));
	//Debug.Log(this.gameObject.transform.rotation.z);
	
}